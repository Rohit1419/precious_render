import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import isEmail from 'isemail';
import disposableDomains from 'disposable-email-domains';
import dns from 'dns/promises';
const OAuth2 = google.auth.OAuth2;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }


      // 1. Block disposable emails
      const domain = email.split('@')[1];
      if (disposableDomains.includes(domain)) {
        return NextResponse.json(
          { error: 'Disposable email addresses are not allowed.' },
          { status: 400 }
        );
      }

      // 2. Check MX records (domain can receive email)
      try {
        const mxRecords = await dns.resolveMx(domain);
        if (!mxRecords || mxRecords.length === 0) {
          return NextResponse.json(
            { error: 'Email domain is not configured to receive emails.' },
            { status: 400 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: 'Invalid email domain.' },
          { status: 400 }
        );
      }

    // Create OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    // Minimal lead capture email template
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f8f9fa;
          }
          .container { 
            max-width: 500px; 
            margin: 40px auto; 
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
          }
          .header { 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            padding: 24px 32px;
            text-align: center;
            border-radius: 9px 9px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
          }
          .badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 8px;
          }
          .content { 
            padding: 32px; 
            border-radius: 0 0 9px 9px;
          }
          .lead-info {
            background: #f0fdf4;
            border: 1px solid #86efac;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 24px;
          }
          .email-display {
            font-size: 18px;
            font-weight: 600;
            color: #059669;
            word-break: break-all;
          }
          .label {
            font-size: 11px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .message-text {
            font-size: 15px;
            line-height: 1.6;
            color: #374151;
            margin-bottom: 20px;
          }
          .action-btn {
            display: inline-block;
            padding: 12px 24px;
            background: #10b981;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
          }
          .footer { 
            background: #f9fafb;
            padding: 20px 32px; 
            border-top: 1px solid #e5e7eb;
            border-radius: 0 0 9px 9px;
          }
          .footer-text {
            font-size: 12px;
            color: #9ca3af;
            margin: 0;
          }
          .timestamp {
            font-size: 11px;
            color: #9ca3af;
            margin-top: 8px;
          }
        </style>
      </head>
      <body>
        <div class="container">

          <div class="content">
            <div class="lead-info">
              <div class="label">Email Address</div>
              <div class="email-display">${email}</div>
            </div>

            <div class="message-text">
              Someone is interested in Precious Render and wants to receive more information about your services.
            </div>

            <a href="mailto:${email}" class="action-btn">Contact Lead</a>

            <div class="timestamp">
              Submitted ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>


        </div>
      </body>
      </html>
    `;

    // Plain text version
    const textBody = `
NEW LEAD CAPTURED - Precious Render
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email: ${email}

Someone is interested in Precious Render and wants to receive more information about your services.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Captured on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Source: Website Hero Section
    `.trim();

    // Create email
    const emailLines = [
      `From: Website Leads <${process.env.EMAIL_FROM}>`,
      `To: ${process.env.EMAIL_TO}`,
      `Reply-To: ${email}`,
      `Subject: New Lead: ${email}`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=utf-8',
      'X-Priority: 1',
      '',
      htmlBody,
    ];

    const rawEmail = emailLines.join('\r\n');
    
    const encodedEmail = Buffer.from(rawEmail)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send email
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    console.log('Lead capture email sent:', result.data.id);

    return NextResponse.json({ 
      success: true,
      message: 'Lead captured successfully',
      messageId: result.data.id
    });

  } catch (error: any) {
    console.error(' Error sending lead email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to capture lead',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
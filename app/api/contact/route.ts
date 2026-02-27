import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const OAuth2 = google.auth.OAuth2;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    // Set credentials with refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    // Create Gmail API instance
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    // Create minimal, professional HTML email
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; 
            line-height: 1.6; 
            color: #333;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
          }
          .container { 
            max-width: 600px; 
            margin: 40px auto; 
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
          }
          .header { 
            background: #ffffff;
            padding: 32px 40px;
            border-bottom: 2px solid #10b981;
            border-radius: 9px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            color: #111;
          }
          .header p {
            margin: 8px 0 0 0;
            color: #666;
            font-size: 14px;
          }
          .content { 
            padding: 40px; 
          }
          .field { 
            margin-bottom: 28px;
          }
          .label { 
            font-weight: 600; 
            color: #666;
            margin-bottom: 6px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .value { 
            color: #111; 
            font-size: 15px;
            padding-top: 4px;
          }
          .value a {
            color: #10b981;
            text-decoration: none;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .message-box {
            background: #f9f9f9;
            border-left: 3px solid #10b981;
            padding: 16px 20px;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.6;
            color: #333;
          }
          .footer { 
            padding: 24px 40px; 
            background: #fafafa;
            border-top: 1px solid #e0e0e0;
            color: #999; 
            font-size: 12px;
            
          }
          .divider {
            height: 1px;
            background: #e0e0e0;
            margin: 24px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Inquiry</h1>
            <p>Precious Render</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            ${company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            <div class="divider"></div>
            
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Submitted on ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </body>
      </html>
    `;

    // Create plain text version
    const textBody = `
                  New Contact Inquiry - Precious Render

                  Name: ${name}
                  Email: ${email}
                  ${company ? `Company: ${company}\n` : ''}
                  Message:
                  ${message}

                    ---
                    Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        `.trim();

    // email in RFC 2822 format
    const emailLines = [
      `From: Precious Render <${process.env.EMAIL_FROM}>`,
      `To: ${process.env.EMAIL_TO}`,
      `Reply-To: ${email}`,
      `Subject:Support: ${name}${company ? ` from ${company}` : ''}`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=utf-8',
      '',
      htmlBody,
    ];

    const rawEmail = emailLines.join('\r\n');
    
    // Encode email in base64url format (required by Gmail API)
    const encodedEmail = Buffer.from(rawEmail)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send email via Gmail API
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    console.log(' Email sent successfully:', result.data.id);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      messageId: result.data.id
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
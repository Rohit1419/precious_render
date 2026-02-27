const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');

// Load credentials from downloaded JSON
const credentials = JSON.parse(fs.readFileSync('./credentials.json'));
const { client_id, client_secret, redirect_uris } = credentials.web || credentials.installed;

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(client_id, client_secret, redirect_uris[0]);

const scopes = ['https://www.googleapis.com/auth/gmail.send'];


const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  prompt: 'consent', // Force to get refresh token
});

console.log('\n🔐 Authorize this app by visiting this URL:\n');
console.log(authUrl);
console.log('\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('📋 Paste the code from that page here: ', (code: string) => {
  rl.close();
  oauth2Client.getToken(
    code,
    (err: Error | null, token: { refresh_token?: string } | null) => {
      if (err) {
        console.error('❌ Error retrieving access token', err);
        return;
      }
      console.log('\nSuccess! Your tokens:\n');
      console.log('GMAIL_REFRESH_TOKEN=' + token?.refresh_token);
      console.log('\n📝 Copy the above line to your .env.local file\n');
    }
  );
});


const nodeMailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '196677487424-el2s0t9ceqr9ha0ris3q6pec54pbedid.apps.googleusercontent.com'
const CLEINT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04Iw57pYXQV-tCgYIARAAGAQSNwF-L9Irw2ol_do7kuDIyPNv02mcPC7INYX6iKKJqbVvCQtkZIMf8GxqNmNdPJfj4_PPC9_SwCQ'

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (options) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'ashishpandey31469@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLEINT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: `SENDER NAME`,
            to: 'dinesh.shah250397@gmail.com',
            subject: 'nice',
            text: 'good',
            // html: `<h1>${options.message}</h1>`,
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}

sendEmail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));
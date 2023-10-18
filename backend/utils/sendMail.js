const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'YourEmailServiceProvider', // e.g., 'Gmail' or your SMTP server details
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient@example.com',
  subject: 'Notification Subject',
  text: 'Notification Message',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

const Twilio = require('twilio');



const sendNotifications = async () => {
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'terimummy baja du jaise dolak !',
         to: 'whatsapp:+919929840831'
       })
      .then(message => console.log(message.sid))
      

}


module.exports = sendNotifications;
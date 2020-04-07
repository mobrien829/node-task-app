const sendgridAPIKey = process.env.SENDGRID_API_KEY;
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mobrien@colgate.edu",
    subject: "Thanks for joining",
    text: `Welcome to the app, ${name}. Let us know how you feel about the app!`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mobrien@colgate.edu",
    subject: "Cancellation confirmed",
    text: `Sorry to see you go ${name}. Please let us know if there was anything we could have done to keep you on.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};

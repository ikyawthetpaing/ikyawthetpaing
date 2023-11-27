const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: "ikyawthetpaing@gmail.com",
    pass: "pliw irho mtau jcxo",
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const mailOptions = {
  from: "ikyawthetpaing@gmail.com",
  to: "ikyawthetpaing@gmail.com",
  subject: "Your email subject",
  html: "<main><p>John Doe</p><p>ikyawthetpaing@gmail.com</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></main>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent successfully:", info.messageId);
  }
});

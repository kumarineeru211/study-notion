const nodemailer = require("nodemailer")
require('dotenv').config();

const mailSender = async (email, title, body) => {
  
  try {
    console.log("Creating transporter...");

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: 587, 
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // secure: false,
    })
    console.log("Transporter created. Sending email...");
    let info = await transporter.sendMail({
      
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    console.log('Email sent: %s', info.messageId);
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender

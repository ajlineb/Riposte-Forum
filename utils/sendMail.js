const nodemailer = require('nodemailer');
const path = require('path');
//const sequelize = require("../config/connection");
require('dotenv').config( {
    path: path.join(__dirname, '../.env')
  } );

function mailSend(data) {
    const transporter = nodemailer.createTransport({ 
        port: 587,
        host: "smtp.mailgun.org",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            secureConnection: true,
            tls: {
                ciphers:'SSLv3'
            }
    })
    transporter.sendMail(data, (err,info) => {
        if (err) {
            return console.log(err);
        }
    })
}

const mailData = {
    from: 'postmaster@sandbox18238699abac4f02aa6191cd6e595e14.mailgun.org',
    to: 'corewired741@outlook.com',
    subject: 'Post successfully created',
    text: 'Another email message!'
};

mailSend(mailData);
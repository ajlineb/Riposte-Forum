const router = require('express').Router();
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config( {
    path: path.join(__dirname, '../../.env')
  } );

router.post('/', async (req, res) => {
    // create a new forum post
    try {
        const {from, to, subject, text} = req.body;
        const mailData = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };
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
        transporter.sendMail(mailData, (err,info) => {
            if (err) {
                return console.log(err);
            }
            res.status(200).send({message: "Mail sent", message_id: info.messageId});
        });
        // if sending only a few emails better to close then leave the connection pool open
        transporter.close();
    } catch (err) {
      console.log('**********', err);
      res.status(400).json(err);
    }
  });

  module.exports = router;
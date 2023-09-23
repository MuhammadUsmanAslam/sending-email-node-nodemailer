"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jed.mcdermott62@ethereal.email',
        pass: 'CP2P7Qke6ff2tQa4t4'
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail() {
    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, // sender address
            to: `${process.env.TO_EMAIL}`, // list of receivers
            subject: `${process.env.EMAIL_SUBJECT}`, // Subject line
            text: `${process.env.EMAIL_TEXT}`, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        //
        // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
        //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
        //       <https://github.com/forwardemail/preview-email>
        //
        return info;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = sendEmail;
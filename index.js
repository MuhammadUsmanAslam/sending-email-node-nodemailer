const express = require("express");
const sendEmail = require("./sendEmail");

const app = express();

app.get('/', async (req, res) => {
    const emailSent = await sendEmail();
    res.status(200).json({message: emailSent})
})

app.listen(5000, () => {
    console.log('App is running on port: 5000')
})
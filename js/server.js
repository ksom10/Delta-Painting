const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/submit_form', async (req, res) => {
    let { name, email, message } = req.body;

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourEmail@gmail.com',
            pass: 'yourPassword'
        }
    });

    let mailDetails = {
        from: email,
        to: 'deltapaintcompany@gmail.com',
        subject: 'New message from your website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs', err);
            res.status(500).send('An error occurred');
        } else {
            console.log('Email sent successfully');
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
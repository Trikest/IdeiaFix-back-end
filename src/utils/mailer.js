const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'anya16@ethereal.email',
        pass: 'zsenhaG2Mfd4scE4Y8'
    }
});

module.exports = transporter;

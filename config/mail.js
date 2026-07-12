const nodemailer = require("nodemailer")
const { EMAIL, PASS } = require("./config")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASS
    }
})

module.exports = transporter
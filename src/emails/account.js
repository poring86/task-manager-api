const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'matheuslino86a@gmail.com',
//     from: 'matheuslino86a@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matheuslino86a@gmail.com',
        subject: 'This is my first creation!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matheuslino86a@gmail.com',
        subject: 'This is my first creation!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
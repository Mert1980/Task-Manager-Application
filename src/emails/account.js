const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'mertdemirok80@gmail.com',
    from: 'mertdemirok80@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you'
})
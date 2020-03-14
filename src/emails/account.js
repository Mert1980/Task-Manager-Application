const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'softwaredeveloperjava80@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'softwaredeveloperjava80@gmail.com',
        subject: 'Canccellation of the user account',
        text:`Dear ${name}, you have successfuly cancelled your account. To improve our customer 
            satisfaction, we would like to hear the reason of your cancellation`
        
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to: 'mertdemirok80@gmail.com',
//     from: 'mertdemirok80@gmail.com',
//     subject: 'This is my first creation',
//     text: 'I hope this one actually get to you'
// })
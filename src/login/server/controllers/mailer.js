import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

import ENV from '../config.js';

let nodeConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: ENV.EMAIL, // generated ethereal user
      pass: ENV.PASSWORD, // generated ethereal password
    }
}

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: 'https://mailgen.js/'
    }
})

/** POST: http://localhost:8080/api/registerMail
 * @param: {
 * "username" : "example123",
 * "userEmail" : "admin123",
 * "text" : "",
 * "subject": "",
 * }
 */
export const registerMail = async (req, res)=> {
    const { username, userEmail, text, subject }= req.body;

    var email={
        body:{
            name : username,
            intro: text || 'Welcome to CODEIN.. BE HERE BE CODER..',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    var emailBody = MailGenerator.generate(email);

    let message = {
        from : ENV.EMAIL,
        to : userEmail,
        subject : subject || "SignUp Successful",
        html : emailBody
    }

    transporter.sendMail(message)
        .then(()=>{
            return res.status(200).send({ msg: "You have received an email from us. Kindly Check."})
        })
        .catch(error => res.status(500).send({ error }))
}
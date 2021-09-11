import * as nodemailer from 'nodemailer'
import config from '../config/mail'
import jwt from 'jsonwebtoken'

class SendEmailConfirmationService {

    constructor(
        public user?: string, 
        public to?: string,
        public subject?: string,
        public message?: string
    ) { }

    sendMail() {

        let transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: false,
            auth: {
                user: config.user,
                pass: config.pass
            },
            tls: { rejectUnauthorized: false }
        })


        jwt.sign({
            email: this.to
        },
            "9aaf65aa4740576769dd8e28ef721b09", {
            subject: this.user,
            expiresIn: "1d"
        },
            (err, emailToken) => {
                const url = `http://localhost:3333/confirmation/${emailToken}`

                let mailConfirmation = {
                    to: "analista.sistemas.lucas@gmail.com",
                    subject: "Confirm Email",
                    html: `Please click this email to confirm your email: <a href="${url}"> Click here</a>`

                }

                
            console.log(mailConfirmation)

                transporter.sendMail(mailConfirmation, (error, info) => {
                    if (error) {
                        return error;
                    } else {
                        return "E-mail successfully sent."
                    }
                })

            }

        )
    }
}

export default new SendEmailConfirmationService
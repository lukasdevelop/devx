import * as nodemailer from 'nodemailer'
import config from '../config/mail'

class Mail {

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string
    ){}

     sendMail(){
        let mailOptions = {
            from: "analista.sistemas.lucas@teste.com",
            to: this.to,
            subject: this.subject,
            html: this.message
        }

        let transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: false,
            auth: {
                user: config.user,
                pass: config.pass
            },
            //tls: { rejectUnauthorized: false}
        })

        console.log(mailOptions)

       transporter.sendMail(mailOptions, (error, info)=> {
            if(error){
                return error;
            }else{
                return "E-mail successfully sent."
            }
        })

        
    }
}

export default new Mail
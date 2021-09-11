import dotenv from 'dotenv'
dotenv.config()

class Config {

    host = process.env.HOST_SMTP;
    port = Number(process.env.PORT_SMTP);
    user = process.env.USER_SMTP;
    pass = process.env.PASS_SMTP;
    from = process.env.EMAIL_FROM;
    baseurl = process.env.BASE_URL;
    secret = String(process.env.SECRET);
}

export default new Config
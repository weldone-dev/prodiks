import nodemailer from 'nodemailer';
import {EmailEntity} from './email.entity';

export class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.yandex.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.YANDEX_EMAIL,
                pass: process.env.YANDEX_APP_PASSWORD
            },
        })
    }

    public async send(email: EmailEntity): Promise<void> {
        const mailOptions = {
            from: process.env.YANDEX_EMAIL,
            to: process.env.YANDEX_EMAIL,
            subject: email.subject,
            text: email.text,
            html: email.html
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Email успешно отправлен');
        } catch (error) {
            console.error('Ошибка при отправке email:', error);
        }
    }

    public async sendCallRequestEmail( name: string, phone: string, email: string, message?:string, subject="Запрос на перезвон") {
        const text = `${name} ${phone} ${email} ${message}`;

        await this.send({ subject, text });
    }
}
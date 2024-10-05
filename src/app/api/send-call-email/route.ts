import { NextResponse } from "next/server";
import { EmailService } from "@/entities/email/email.service";

const emailService = new EmailService();

export async function POST(req: Request) {
    try {
        const { name, phone, email, message } = await req.json();

        await emailService.sendCallRequestEmail(name, phone, email, message, "Запрос на перезвон");

        return NextResponse.json({ message: 'Запрос на перезвон отправлен' }, { status: 200 });
    } catch (error) {
        console.error('Ошибка при отправке:', error);
        return NextResponse.json({ message: 'Ошибка при отправке', error }, { status: 500 });
    }
}
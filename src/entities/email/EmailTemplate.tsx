import React from 'react';

interface EmailTemplateProps {
    name: string;
    phone: string;
    email: string;
    text?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, phone, email, text }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Запрос на перезвон</h1>
            <p><strong>Имя:</strong> {name}</p>
            <p><strong>Телефон:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            {text && (
                <p><strong>Текстовая заявка: </strong> {text}</p>
            )}
        </div>
    );
};

export interface EmailEntity {
    subject: string;
    text?: string; // Оставляем для текстовой версии, если требуется
    html?: string;  // Поле для HTML-контента
}
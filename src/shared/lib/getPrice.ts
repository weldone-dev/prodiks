import { cache } from 'react';

const API_URL = 'https://metal4u.ru/lme_utf8.js';


const fetchLmeData = cache(async () => {
    const response = await fetch(API_URL, {
        next: { revalidate: 86400 },
    });

    if (!response.ok) {
        throw new Error('Не удалось получить данные');
    }

    const data = await response.text();
    const html = data.slice(16, data.length-2)
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html');
    doc.querySelectorAll('font>a').forEach((el) => {
        console.log({el})
    })
    return html; // предположим, что цена находится в data.price
});

export { fetchLmeData as lmeData };
"use server";

import * as cheerio from 'cheerio';
import type {IlmeData} from "./helper/type";

let cachedData: IlmeData | null = null;
let lastFetchTime: number = Date.now();
const CACHE_DURATION = 8 * 3600; // Время кэширования данных 8 часов

const getResult = async () => {
    const url = 'https://metal4u.ru/lme/';
    try {
        const response = await fetch(url, {next: {revalidate: 8 * 3600}}); //кешировать на каждые 8 часов
        const html = await response.text();
        const $ = cheerio.load(html);

        // Извлекаем дату из заголовка таблицы
        const dateText = $('div#sub_border table.lme td[colspan="4"]').first().text();
        const dateMatch = dateText.match(/на (\d{4}-\d{2}-\d{2})/);
        const date = (dateMatch ? dateMatch[1] : 'Дата не найдена');

        // Извлекаем данные по металлам
        const metals: { metal: string; price: number; change: number; }[] = [];
        $('div#sub_border table.lme tr').each((_, element) => {
            const metalName = $(element).find('td').eq(0).text().trim();
            const price = $(element).find('td').eq(2).text().trim();
            const change = $(element).find('td').eq(3).text().trim();

            if (metalName && price && change) {
                metals.push({
                    metal: metalName,
                    price: parseFloat(price),
                    change: parseFloat(change),
                });
            }
        });

        // Кешируем результат
        cachedData = {
            date,
            metals
        };
        lastFetchTime = Date.now();

        return cachedData;
    } catch (error) {
        throw new Error('Ошибка при загрузке данных'); // Обработка ошибок
    }
};

export async function fetchLmaMetalPrice() {
    return (
        (cachedData && (Date.now() - lastFetchTime) < (CACHE_DURATION * 1000))
            ? cachedData
            : getResult()
    )
}
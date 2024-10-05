"use server";

import type {ICurrencyOption} from "./helper/type";
import xml2js from "xml2js";

let cachedData: ICurrencyOption | null = null;
let lastFetchTime: number = Date.now();
const CACHE_DURATION = 8 * 3600; // Время кэширования данных 8 часов

const getResult = async (): Promise<ICurrencyOption> => {
    const url = `https://www.cbr.ru/scripts/XML_daily.asp?date_req=${new Date().toLocaleDateString('ru-RU')}`;
    try {
        const response = await fetch(url, {next: {revalidate: 8 * 3600}}); //кешировать на каждые 8 часов
        const xml = await response.text();
        const parsedData = await xml2js.parseStringPromise(xml, {explicitArray: false});
        const currencies = parsedData.ValCurs.Valute;
        const neededCurrencies: string[] = ['USD', 'EUR', 'CNY', 'GBP'];
        const data = neededCurrencies.map((code) => {
            const data = currencies.find((item: { CharCode: string; }) => item.CharCode === code);
            const rate = parseFloat(data.Value.replace(',', '.'));
            return [code, rate]
        })

        cachedData = Object.fromEntries(data);
        lastFetchTime = Date.now();
        return cachedData || {};
    } catch (error) {
        throw new Error('Ошибка при загрузке данных'); // Обработка ошибок
    }
};


export async function fetchCurrencies(): Promise<ICurrencyOption> {
    return (
        (cachedData && (Date.now() - lastFetchTime) < (CACHE_DURATION * 1000)
                ? cachedData
                : getResult()
        )
    )
}
import type {ReactNode} from "react";
import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import cn from "clsx";
import "./globals.css";

const montserrat = Montserrat({
    display: 'swap',
    variable: '--font-montserrat',
    subsets: ['latin'],
})
export const metadata: Metadata = {
    title: 'Продикс - свинцовый и оловянный металлопрокат в г.Санкт-Петербург',
    description: 'Производство свинцовых изделий по индивидуальным потребностям, производство свинцового и оловянного металлопроката в г. Санкт-Петербург. Купить свинцовый лист, свинцовые прокладки, свинцовое литье, свинцовый роль, свинцовый кирпич ласточкин хвост, оловянно-свинцовые припои. Качество по ГОСТ!',
    keywords: "Свинец, свинцовый лист, листовой свинец, лист из свинца, свинцовый металлопрокат, Свинцовый кирпич, свинцовое литье, изделия из свинца, Припои, оловянные аноды, Изделия из олова, металлопрокат, Санкт-Петербург, СПБ",
    robots: "index,follow",
    icons: [{rel: 'icon', url: "/images/favicon-prodix.ico"}]
};

export default function RootLayout(
    {children,}: Readonly<{ children: ReactNode; }>
) {
    return (
        <html lang="ru">
        <body className={cn(montserrat.variable, "font-montserrat")}>
            {children}
        </body>
        </html>
    );
}

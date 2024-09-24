"use client"

import {YandexMap} from "@/view/MainPage/ui/Contact/YandexMap";
import {useEffect, useRef, useState} from "react";

const position: number[] = [59.789484, 30.181588];

export function Contact() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const handleLoadMap = () => {
        setMapLoaded(true);
    };

    const [mapVisible, setMapVisible] = useState(false);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setMapVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px', // Начать подгрузку за 200 пикселей до видимости
            }
        );

        if (mapContainerRef.current) {
            observer.observe(mapContainerRef.current);
        }

        return () => {
            if (mapContainerRef.current) {
                observer.unobserve(mapContainerRef.current);
            }
        };
    }, []);
    return (
        <article className={"pt-[70px]"} ref={mapContainerRef}>
            <div
                className={"lg:container font-montserrat border-t border-[#0C0C0C] pt-[36px] flex flex-col lg:flex-row justify-between "}>
                <header className={"container  flex flex-col gap-[40px] w-full lg:max-w-[380px] mb-[49px] lg:mb-0 "}>
                    <h1 className={"text-[#0C0C0C] text-[50px] leading-[61px] font-light"}>Контакты</h1>
                    <div>
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="mb-4">
                            <div className={"text-[20px] leading-[28px] font-semibold"}>Наш адрес:</div>
                            <p className="text-[18px] leading-[25px] font-light mt-[30px]">
                                <span itemProp="addressCountry">Россия</span>, <span itemProp="addressRegion">Ленинградская область</span>, <span
                                itemProp="addressLocality">Ломоносовский район</span>, <span itemProp="addressLocality">Виллозское городское поселение</span>
                                <span itemProp="streetAddress">территория Южная часть производственной зоны Горелово, Волхонское шоссе, дом 6</span>
                            </p>
                            <div className={"text-[18px] leading-[25px] mt-[30px]"}
                                 itemScope
                                 itemType="https://schema.org/ContactPoint"
                            >
                                <p>Тел: <a className={"font-medium"} itemProp="telephone" href={"tel:+7(812)715-34-88"}>+7
                                    (812) 715-34-88</a></p>
                                <p>Тел/факс: <a className={"font-medium"} itemProp="faxNumber"
                                                href={"tel:+7(812)677-00-16"}>+7 (812) 677-00-16</a></p>
                                <p>E-mail: <a className={"font-medium"} itemProp="email"
                                              href={"mailto:prodiks@yandex.ru"}>prodiks@yandex.ru</a></p>
                            </div>
                        </div>
                    </div>
                </header>
                <footer className={"w-full lg:w-full lg:max-w-[612px] h-[488px] lg:rounded-t-[20px] overflow-hidden"}>
                    {!mapLoaded && mapVisible && (
                        <div
                            className="w-full h-full bg-cover cursor-pointer bg-[url(/placeholder_map.jpg)] bg-top"
                            onClick={handleLoadMap}
                        />
                    )
                    }
                    {mapLoaded && (
                        <YandexMap coordinates={position} className={"w-full h-full relative"}/>
                    )}
                </footer>
            </div>
        </article>
    )
}

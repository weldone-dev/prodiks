import Script from "next/script";
import type {FC, HTMLAttributes} from "react";

declare global {
    interface Window {
        ymaps: any;
    }
}
interface IProps extends HTMLAttributes<HTMLDivElement> {
    coordinates: number[];
}
export const YandexMap:FC<IProps> = ({coordinates, ...props}) => {

    return <div id={'map'} {...props}>
        <Script
            src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
            async
            onLoad={() => {
                if (window.ymaps) {
                    window.ymaps.ready(() => {
                        const map = new window.ymaps.Map('map', {
                            center: coordinates,
                            zoom: 10,
                            type: "yandex#map",
                            theme: "islands#dark"
                        });
                        const darkTheme = {
                            fillColor: '#000000',
                            strokeColor: '#FFFFFF',
                            iconColor: '#FFFFFF',
                        };

                        // Применяем стили к карте
                        map.geoObjects.each((geoObject: any) => {
                            geoObject.options.set(darkTheme);
                        });

                        // map.setType('yandex#dark');

                        const placemark = new window.ymaps.Placemark(coordinates, {
                            hintContent: 'Наше местоположение',
                        }, {
                            preset: 'islands#nightIcon', // Применение ночного стиля к иконке
                        });

                        map.geoObjects.add(placemark);
                    });
                }
            }}
        />
    </div>;
};

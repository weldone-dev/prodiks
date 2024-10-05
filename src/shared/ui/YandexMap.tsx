import type {FC, HTMLAttributes} from "react";
import Script from "next/script";

declare global {
    interface Window {
        ymaps: any;
    }
}
interface IProps extends HTMLAttributes<HTMLDivElement> {
    coordinates: number[];
}
export const YandexMap:FC<IProps> = ({coordinates, ...props}) => (
    <div id={'map'} {...props}>
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
                            iconColor: '#FFFFFF'
                        };
                        map.geoObjects.each((geoObject: any) => {
                            geoObject.options.set(darkTheme);
                        });
                        const placemark = new window.ymaps.Placemark(coordinates, {
                            hintContent: 'Наше местоположение'
                        }, {
                            preset: 'islands#nightIcon'
                        });

                        map.geoObjects.add(placemark);
                    });
                }
            }}
        />
    </div>
);

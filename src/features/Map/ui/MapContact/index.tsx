import React, {type FC, RefObject, useEffect, useState} from "react";
import {YandexMap} from "@/shared/ui/YandexMap";
import cn from "clsx";

interface MapFooterProps {
    position: number[];
    mapContainerRef: RefObject<HTMLDivElement>;
    className?: string;
}

export const MapContact: FC<MapFooterProps> = ({position, mapContainerRef, className}) => {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapVisible, setMapVisible] = useState(false);

    const handleLoadMap = () => {
        setMapLoaded(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setMapVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px'
            }
        );

        const currentMapContainer = mapContainerRef.current;

        if (currentMapContainer) {
            observer.observe(currentMapContainer);
        }

        return () => {
            if (currentMapContainer) {
                observer.unobserve(currentMapContainer);
            }
        };
    }, [mapContainerRef]);
    return (
        <div className={cn("relative w-full lg:max-w-[612px] h-[488px] lg:rounded-t-[20px] overflow-hidden bg-[#272727]", className)}>
            {
                (mapLoaded)
                    ? (<YandexMap coordinates={position} className={"w-full h-full relative"}/>)
                    : (mapVisible && (
                        <div
                            className="w-full h-full bg-cover cursor-pointer bg-[url(/images/placeholder_map.jpg)] bg-top"
                            onClick={handleLoadMap}
                        />
                    ))
                    || (
                        <div className={"absolute inset-0 flex justify-center items-center"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="xMidYMid"
                                width="100"
                                height="100"
                                className={"shape-rendering-auto block bg-transparent animate-spin"}
                            >
                                <g data-idx="1">
                                    <circle strokeDasharray="164.93361431346415 56.97787143782138" r="35"
                                            strokeWidth="10" stroke="#fff" fill="none" cy="50" cx="50" data-idx="2"
                                            transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,100,100)">

                                    </circle>
                                    <g data-idx="4"></g>
                                </g>
                            </svg>
                        </div>
                    )
            }
        </div>
    )
}
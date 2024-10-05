"use client"
import {useRef} from "react";
import {ContactData} from "@/shared/ui/ContactData";
import {MapContact} from "@/features/Map/ui/MapContact";
import {positionContact} from "@/shared/config";

export const ContactsPage = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    return (
        <article className={"pt-[90px] w-full h-full flex justify-center"} ref={mapContainerRef}>
            <div
                className={"w-full font-montserrat lg:border-t lg:border-[#0C0C0C] lg:pt-[36px] lg:container flex flex-col lg:flex-row justify-between"}>
                <header className={"container lg:max-w-full border-t border-[#0C0C0C] lg:border-none pt-[36px] lg:pt-0 w-full px-[17px] flex flex-col gap-[40px] mb-[49px] lg:mb-0 "}>
                    <h1 className={"text-[#0C0C0C] text-[50px] leading-[61px] font-light"}>Контакты</h1>
                    <ContactData/>
                </header>
                <div className={"w-full"}>
                    <MapContact position={positionContact} mapContainerRef={mapContainerRef} className={"lg:rounded-[20px]"}/>
                </div>

            </div>
        </article>
    )
}
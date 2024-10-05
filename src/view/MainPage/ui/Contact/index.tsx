"use client"
import {useRef} from "react";
import {MapContact} from "@/features/Map/ui/MapContact";
import {ContactData} from "@/shared/ui/ContactData";
import {positionContact} from "@/shared/config";

export function Contact() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);


    return (
        <article className={"pt-[70px]"} ref={mapContainerRef}>
            <div
                className={"lg:container font-montserrat border-t border-[#0C0C0C] pt-[36px] flex flex-col lg:flex-row justify-between "}>
                <header className={"container  flex flex-col gap-[40px] w-full lg:max-w-[380px] mb-[49px] lg:mb-0 "}>
                    <h1 className={"text-[#0C0C0C] text-[50px] leading-[61px] font-light"}>Контакты</h1>
                    <ContactData />
                </header>
                <MapContact position={positionContact} mapContainerRef={mapContainerRef}/>
            </div>
        </article>
    )
}

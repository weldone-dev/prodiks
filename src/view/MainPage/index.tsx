"use client"

import {MainHeader} from "./ui/MainHeader";
import {About} from "./ui/About";
import {TermsOfCooperation} from "./ui/TermsOfCooperation";
import {MetalPrices} from "./ui/MetalPrices";
import {FAQ} from "./ui/FAQ";
import {Contact} from "./ui/Contact";

export function MainPage() {
    return (
        <>

            <MainHeader/>
            <About/>
            <TermsOfCooperation />
            {/*<MetalPrices />*/}
            <FAQ />
            <Contact />
        </>
    )
}
"use client";
import {MainHeader} from "./ui/MainHeader";
import {About} from "./ui/About";
import {TermsOfCooperation} from "./ui/TermsOfCooperation";
import {MetalPrices} from "./ui/MetalPrices";
import {FAQ} from "./ui/FAQ";
import {Contact} from "./ui/Contact";
import type {ICurrencyOption} from "@/entities/services/currencies/helper/type";
import type {IlmeData} from "@/entities/services/lme/helper/type";


interface IProps {
    lmeData: IlmeData;
    currency: ICurrencyOption;
}

export function MainPage(props: IProps) {
    const {
        lmeData,
        currency
    } = props;
    return (
        <>
            <MainHeader/>
            <About/>
            <TermsOfCooperation id={"terms-of-cooperation"}/>
            <MetalPrices lmeData={lmeData} currencies={currency}/>
            <FAQ/>
            <Contact/>
        </>
    )
}
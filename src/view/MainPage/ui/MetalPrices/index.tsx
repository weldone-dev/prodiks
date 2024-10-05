"use client"
import cn from "clsx";
import {useEffect, useState} from "react";
import type {ICurrencyOption} from "@/entities/services/currencies/helper/type";
import type {IlmeData} from "@/entities/services/lme/helper/type";


const currencyTranslations = {
    RUB: "рублях",
    USD: "долларах",
    EUR: "eвро",
    GBP: "фунтах",
    CNY: "юанях",
};
type CurrencyCodes = keyof typeof currencyTranslations;
interface IProps {
    lmeData: IlmeData;
    currencies: ICurrencyOption;
}
function convertCurrency(priceInUSD: number, priceUSD: number, exchangeRate: number, fixed=1): number {
    const convertedPrice = (priceInUSD * priceUSD) / exchangeRate;
    return parseFloat(convertedPrice.toFixed(fixed));
}
export function MetalPrices({lmeData, currencies}: IProps) {
    const [code, setCode] = useState<CurrencyCodes>("RUB");
    const [data, setData] = useState(lmeData);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    useEffect(() => {
        if (code === "USD"){
            setData(lmeData)
        } else if (code === "RUB") {
            setData({
                date:lmeData.date,
                metals: lmeData.metals.map((metal) => ({
                    metal: metal.metal,
                    price: convertCurrency(metal.price, currencies["USD"], 1, 0),
                    change: convertCurrency(metal.change, currencies["USD"], 1, 0 )
                })),
            })
        } else {
            setData({
                date:lmeData.date,
                metals: lmeData.metals.map((metal) => ({
                    metal: metal.metal,
                    price: convertCurrency(metal.price, currencies["USD"], currencies[code]),
                    change: convertCurrency(metal.change, currencies["USD"], currencies[code])
                })),
            })
        }
    }, [code, currencies, lmeData]);
    function handleClickMenu (code: CurrencyCodes) {
        setCode(code);
        setIsOpenMenu(false);
    }

    return (
        <article className={"py-[70px] md:pt-[140px] md:pb-[176px]"}>
            <div className={"container"}>
                <header className={"w-full border-t border-[#0C0C0C] mb-[40px] md:mb-[21px]"}>
                    <h1 className={"pt-[36px] text-[#0C0C0C] text-[25px] md:text-[50px] leading-[30px] md:leading-[61px]"}>Стоимость
                        металлов
                        <span className={"block"}>на Лондонской бирже</span></h1>
                </header>
                <div className={"w-full"}>
                    <div className={"w-fit md:ml-auto flex gap-[17px]"}>
                        <span className={"my-auto"}>Цена за тонну в </span>
                        <div className={"relative"}>
                            <button className={"flex gap-[2px]"} onClick={()=>setIsOpenMenu(!isOpenMenu)}>
                                <div
                                    className={"bg-black text-white text-[18px] leading-[22px] w-[138px] h-[40px] flex items-center justify-center"}
                                >
                                    {currencyTranslations[code]}
                                </div>
                                <div className={"bg-black w-[40px] h-[40px] flex items-center justify-center"}>
                                    <svg className={cn("transition-all duration-300",isOpenMenu && "-scale-y-100")} xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6"
                                         fill="none">
                                        <path d="M0.560547 1L6.66224 5L12.7639 1" stroke="white"/>
                                    </svg>
                                </div>
                            </button>
                            <div className={cn("absolute overflow-hidden bg-black text-white w-[138px] text-center transition-all duration-300", isOpenMenu? "max-h-[150px]": "max-h-0")}>
                                <div className={"pb-[13px]"}>
                                    {Object.entries(currencyTranslations).filter(value => value[0] !== code).map(([code, value]) => (
                                        <div key={value} onClick={()=>handleClickMenu(code as CurrencyCodes)} className={"cursor-pointer"}>
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className={"mt-[66px] w-full table-auto"}>
                        <tbody>
                        {data.metals.map((metal, i) => (
                            <tr className={"text-[18px] leading-[74px] py-[26px] border-b border-[#D4D4D4]"} key={i}>
                                <th className={"text-left w-1/3 text-[#0C0C0C] font-semibold"}>{metal.metal}</th>
                                <th className={"text-center w-1/3 font-normal"}>{metal.price}</th>
                                <th className={cn("text-right w-1/3 font-normal", metal.change > 0 ? "text-[#1ACD0A]" : "text-[#C70000]")}>
                                    <div className={"flex w-full justify-end items-center gap-[9px]"}>
                                        <div>{metal.change.toString().replace(".", ",")}</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                             viewBox="0 0 15 15" fill="none">
                                            <path
                                                d="M1.00002 13.1678C1.0037 13.7201 1.4544 14.1648 2.00667 14.1611L11.0065 14.1011C11.5587 14.0974 12.0035 13.6467 11.9998 13.0944C11.9961 12.5422 11.5454 12.0975 10.9931 12.1011L2.99331 12.1545L2.93996 4.15466C2.93627 3.60239 2.48558 3.15767 1.93331 3.16136C1.38104 3.16504 0.936318 3.61573 0.940002 4.168L1.00002 13.1678ZM13.2882 0.297625L1.28819 12.4588L2.71181 13.8635L14.7118 1.70238L13.2882 0.297625Z"
                                                fill={metal.change > 0 ? "#1ACD0A" : "#C70000"}
                                            />
                                        </svg>
                                    </div>
                                </th>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </article>
    )
}
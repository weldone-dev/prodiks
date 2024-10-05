"use client"
import {ChangeEvent, useEffect, useState} from "react";
import cn from "clsx";
import Image from "next/image";
import type {ITableRow} from "../helpers/type";
import type {IlmeData} from "@/entities/services/lme/helper/type";
import type {ICurrencyOption} from "@/entities/services/currencies/helper/type";
import {calcPrice} from "../module/utils";

interface IProps {
    data: ITableRow[];
    lmeData: IlmeData;
    currency: ICurrencyOption;
}

export const Table = ({data, lmeData, currency}: IProps) => {
    const priceLme = lmeData.metals.find((data) => data.metal === "Алюминий")?.price;
    const priceUSD = currency["USD"];
    if (!priceLme) return null;
    return (
        <div className={"w-full my-[80px]"}>
            <div className="grid grid-cols-3 text-center py-[5px] border-b border-[#D9D9D9]">
                {[
                    "Наименование",
                    "Размер мм",
                    "Цена за шт."
                ].map((text, index) => (
                    <div key={text}
                         className={cn("text-[18px] font-medium text-[#0C0C0C] leading-[22px] self-end", index === 0 && "text-left")}
                    >
                        {text}
                    </div>
                ))}
            </div>
            <ul className={"mt-[26px]"}>
                {data.map((row, index) => (
                    <li key={index}
                        className={"border-b border-[#D9D9D9]"}
                    >
                        <RowTable row={row} priceLme={priceLme} priceUSD={priceUSD}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}


interface IPropsRow {
    row: ITableRow;
    priceLme: number;
    priceUSD: number;
}

function RowTable({row, priceLme, priceUSD}: IPropsRow) {
    const [open, setOpen] = useState<boolean>(false);
    const [cartCount, setCartCount] = useState(0);

    function handleAddCart() {
        setCartCount(1);
    }

    function changeInput(e: ChangeEvent<HTMLInputElement>) {
        const count = parseInt(e.target.value || "0");
        if (count >= 0) {
            setCartCount(count);
        }
    }

    const toggleRow = () => {
        setOpen((open) => !open);
    };

    return (
        <>
            <div
                onClick={() => toggleRow()}
                className={"grid grid-cols-3 justify-items-center py-[10px]  text-[18px] leading-[22px] text-[#0C0C0C] cursor-pointer"}
            >
                <div className={"justify-self-start"}>{row.name}</div>
                <div className={"text-[#33848A] font-medium flex items-center"}>{row.size}</div>
                <div className={"flex items-center"}>
                    {calcPrice(priceLme, priceUSD, row.weight)}
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[250px]' : 'max-h-0'}`}
            >
                <div className="flex items-start py-[29px] gap-[20px]">
                    <div className={"rounded-xl overflow-hidden w-[184px] h-[184px]"}>
                        {row.image !== "" && (
                            <Image
                                className={"rounded-[13px] object-cover"}
                                src={row.image || "/"}
                                alt={`${row.name} ${row.size}`}
                                width={255}
                                height={165}
                            />
                        )}
                    </div>
                    <div className={"rounded-xl overflow-hidden w-[184px] h-[184px]"}>
                        {row.design && (
                            <Image
                                className={"rounded-[13px]"}
                                src={row.design}
                                alt={`${row.name} ${row.size}`}
                                width={255}
                                height={165}
                            />
                        )}
                    </div>
                    <div className={"my-auto mx-[20px] transition-all duration-500 ease-in-out"}>
                        {(!!cartCount) && (
                            <div className={"text-center text-[25px] mb-[5px]"}>
                                {calcPrice(priceLme, priceUSD, row.weight * cartCount)}
                            </div>
                        )}

                        <div className={"flex"}>
                            <div>
                                {((cartCount === 0)
                                    ? (
                                        <button
                                            className={"bg-[#33848A] py-[15px] px-[55px] text-white font-medium text-[13px] leading-[16px] select-none"}
                                            onClick={handleAddCart}
                                        >
                                            В корзину
                                        </button>
                                    )
                                    : (
                                        <div className={"flex text-center text-white"}>
                                            <button
                                                className={"border border-[#D2D2D2] bg-black leading-[22px] py-[11px] px-[15px]"}
                                                onClick={() => setCartCount((count) => count - 1)}
                                            >
                                                -
                                            </button>
                                            <input
                                                className={"w-[109px] text-[18px] border border-[#D2D2D2] bg-black text-center focus:outline-none no-spin"}
                                                value={cartCount}
                                                onChange={changeInput}
                                                type="number"
                                            />
                                            <button
                                                className={"border border-[#D2D2D2] bg-black leading-[22px] py-[11px] px-[15px]"}
                                                onClick={() => setCartCount((count) => count + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

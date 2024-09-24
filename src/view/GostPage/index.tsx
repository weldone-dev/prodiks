"use client"

import React, {useEffect, useState} from "react";
import cn from "clsx";
import {useSearchParams, useRouter} from "next/navigation";
import Link from "next/link";


interface IProps {
    gostList: {
        name: string;
        pdf: string;
    }[];
    name: string;
}

export function GostPage({gostList, name}: IProps) {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState<number>(() => {
        return gostList.findIndex(item => item.name === name)
    });
    const [activePdf, setActivePdf] = useState<string>(() => {
        const data = gostList.find(item => item.name === name)
        return data?.pdf as string
    })

    function changeActiveIndex(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: number) {
        event.preventDefault()
        console.log("click")
        setActiveIndex(value);
        setActivePdf(gostList[value].pdf)
        router.replace(`/gost/${encodeURIComponent(gostList[value].name)}`, { scroll: false });
    }

    return (
        <article className={"container text-[#0C0C0C] font-montserrat pt-[140px] pb-[113px]"}>
            <div
                className={"relative before:content-[''] before:absolute before:h-[1px] before:w-full before:bg-[#0C0C0C] mb-[100px]"}
            >
                <h1 className={"pt-[23px] text-[50px] leading-[61px] font-light mb-[59px]"}>Гост</h1>
                <p className={"max-w-[743px] text-[18px] leading-[25px] font-semibold"}>
                    Настоящий стандарт распространяется на свинцовые листы, применяемые
                    в химическом машиностроении и других отраслях промышленности.
                </p>
            </div>
            <article>
                <ul className={"flex gap-x-[40px] gap-y-[20px] flex-wrap mb-[22px]"}>
                    {gostList.map((item, index) => (
                        <li
                            key={index}
                            className={cn(
                                "text-[18px] leading-[20px] font-semibold",
                                (activeIndex === index) ? "text-black" : "text-[#595959] cursor-pointer"
                            )}
                        >
                            <Link href={`/gost/${encodeURIComponent(gostList[index].name)}`} onClick={(e)=>changeActiveIndex(e, index)}>
                                {item.name}
                            </Link>

                        </li>
                    ))}
                </ul>

                <div
                    className={"relative rounded-[20px] overflow-hidden w-full h-[600px] bg-[#D0D0D0] shadow-[0px_23px_50px_0px_#0000001A,0px_91px_91px_0px_#00000017,0px_204px_123px_0px_#0000000D,0px_363px_145px_0px_#00000003,0px_567px_159px_0px_#00000000]"}>
                    <ul className={"w-full h-full"}>
                        {gostList.map((item, index) => (
                            <li key={index} className={cn("w-full h-full", !(activeIndex === index) && "hidden")}>
                                <embed
                                    src={`/pdfs/${activePdf}.pdf`}
                                    type="application/pdf"
                                    width="100%"
                                    height="100%"
                                    hidden={!(activeIndex === index)}
                                    className={cn("border-none")}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>

        </article>
    )
}
"use client"
import Link from "next/link";
import Image from "next/image";
import {navFooterList} from "@/features/data/api/getNavList";



export function Footer () {
    return (
        <footer className={"z-10 relative bg-[#272727] pt-[19px] pb-[142px] md:pt-[80px] lg:pb-[68px]"}>
            <div className={"container text-white grid md:grid-cols-2 gap-[60px]"}>
                <div>
                    <Link href={"/"} className={"flex flex-nowrap items-center"}>
                        <Image src={"/logo.png"} alt={"prodiks logo"} width={60} height={60}/>
                        <span className={"text-[#68BAB5] text-[13px] font-bold font-montserrat"}>Продикс</span>
                    </Link>
                </div>
                <div>
                    <ul className={"grid sm:grid-cols-2 gap-y-[24px] "}>
                        {navFooterList.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>Тел: <a className={"font-medium"} itemProp="telephone" href={"tel:+7(812)715-34-88"}>+7
                        (812) 715-34-88</a></p>
                    <p>Тел/факс: <a className={"font-medium"} itemProp="faxNumber"
                                    href={"tel:+7(812)677-00-16"}>+7 (812) 677-00-16</a></p>
                </div>
                <div>
                    <button
                        className={"bg-[#275E63] text-[#FFFFFF] text-[13px] font-medium font-montserrat py-[11px] px-[46px] my-auto hover:bg-[#28696D] active:bg-[#0C0C0C] transition duration-150 ease-in-out"}
                    >
                        Заказать
                    </button>
                </div>
            </div>
        </footer>
    )
}
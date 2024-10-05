"use client"
import Link from "next/link";
import Image from "next/image";
import {navFooterList} from "@/features/data/api/getNavList";
import {OrderModalTrigger} from "@/features/modal/ui/Modal/OrderModalTrigger";



export function Footer () {
    return (
        <footer className={"z-10 relative bg-[#272727] pt-[19px] pb-[142px] md:pt-[80px] lg:pb-[68px]"}>
            <div className={"container text-white grid md:grid-cols-2 gap-[60px]"}>
                <div>
                    <Link href={"/"} className={"flex flex-nowrap items-center"}>
                        <Image src={"/images/logo.png"} alt={"prodiks logo"} width={60} height={60}/>
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
                    <OrderModalTrigger />
                </div>
            </div>
        </footer>
    )
}
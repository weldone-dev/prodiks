"use client"
import cn from "clsx";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from 'next/navigation';
import {CartIcon} from "@/shared/ui/CartIcon";
import {navBarList} from "@/features/data/api/getNavList";
import {OrderModalTrigger} from "@/features/modal/ui/Modal/OrderModalTrigger";


interface IProps {
    className?: string;
}

export function NavBar({className}: IProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const openMenu = () => {
        setIsMenuOpen(true);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header className={cn("fixed w-full z-10", className)}>
            <div className={'container flex justify-between'}>
                <div>
                    <Link href={"/"} className={"flex flex-nowrap items-center"}>
                        <Image src={"/images/logo.png"} alt={"prodiks logo"} width={60} height={60}/>
                        <span className={"text-[#286067] text-[13px] font-bold font-montserrat"}>Продикс</span>
                    </Link>
                </div>
                <Link href={"/cart"} className={"lg:hidden h-full ml-auto my-auto mr-[25px]"}>
                    <CartIcon count={5} width={20} height={20}/>
                </Link>
                <button
                    className={"lg:hidden flex flex-col items-center justify-center p-2"}
                    onClick={openMenu}
                    title="Открыть меню"
                >
                    <div
                        className={cn("w-6 h-0.5 bg-[#0C0C0C] mb-1 transition-transform duration-300", isMenuOpen && "rotate-45 translate-y-1")}/>
                    <div
                        className={cn("w-5 h-0.5 bg-[#0C0C0C] mb-1 self-end transition-opacity duration-300", isMenuOpen && "opacity-0")}/>
                    <div
                        className={cn("w-6 h-0.5 bg-[#0C0C0C] transition-transform duration-300", isMenuOpen && "-rotate-45 -translate-y-1")}/>
                </button>
                <nav className={"hidden lg:flex items-center"}>
                    <ul className={"flex justify-center gap-[35px] text-[#0C0C0C] text-[13px] font-montserrat leading-[16px]"}>
                        {navBarList.map((item, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "cursor-pointer relative before:content-[''] before:absolute before:bg-[#33848A] before:h-[3px] before:w-[calc(100%+18px)] before:max-w-0 before:-bottom-[14px] before:-left-[9px] before:transition-all before:duration-300 before:ease-in",
                                    {
                                        'before:max-w-[calc(100%+18px)]': (
                                            (pathname === item.url)
                                            || (item.url !== '/' && pathname.startsWith(item.url))

                                        )
                                    }
                                )}
                            >
                                <Link href={item.url} data-b={""}>{item.text}</Link></li>
                        ))}
                    </ul>
                </nav>
                <div className={"hidden lg:flex"}>
                    <Link href={"/cart"} className={"h-full flex items-center mr-[50px]"}>
                        <CartIcon count={5}/>
                    </Link>
                    <OrderModalTrigger/>
                </div>
            </div>
            <MobileNav isMenuOpen={isMenuOpen} closeMenu={closeMenu}/>
        </header>
    )
}


function MobileNav({isMenuOpen, closeMenu}: { isMenuOpen: boolean, closeMenu: () => void }) {
    return (
        <div
            className={`fixed z-50 top-0 left-0 w-full h-full bg-white/20 backdrop-blur-[60px] transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}
        >
            <div className={"container h-full"}>
                <div className={"flex items-center justify-between"}>
                    <Link href={"/"} className={"flex flex-nowrap items-center"}>
                        <Image src={"/images/logo.png"} alt={"prodiks logo"} width={60} height={60}/>
                        <span className={"text-[#33848A] text-[13px] font-bold font-montserrat"}>Продикс</span>
                    </Link>
                    <div>
                        <button
                            onClick={closeMenu}
                            title="Закрыть меню"
                            className={"relative w-6 h-6 flex items-center justify-center bg-transparent border-none cursor-pointer"}
                        >
                            <span className={"absolute w-0.5 h-[38px] bg-[#0C0C0C] rotate-45"}></span>
                            <span className={"absolute w-0.5 h-[38px] bg-[#0C0C0C] -rotate-45"}></span>
                        </button>
                    </div>
                </div>
                <nav className={"flex flex-col items-center justify-center h-full"}>
                    <ul className={"flex flex-col gap-12 text-[#0C0C0C] font-normal text-[20px] font-montserrat "}>
                        {navBarList.map((item, index) => (
                            <li key={index} className={"cursor-pointer"}>
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
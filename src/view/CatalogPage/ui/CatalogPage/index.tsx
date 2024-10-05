import type {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "clsx";
import {ICatalogLink} from "@/entities/product/helper/type";

interface IProps {
    catalogLink: ICatalogLink[]
}

export const CatalogPage: FC<IProps> = ({catalogLink}) => {
    return (
        <article className={"w-full h-full flex justify-center pt-[200px] mb-[100px]"}>
            <div className={"container border-t border-[#0C0C0C] pt-[36px]"}>
                <header className={"mb-[80px]"}>
                    <h1 className={"text-[#0C0C0C] text-[50px] leading-[61px] font-light"}>Каталог</h1>
                </header>
                <footer className={"max-w-[380px] lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-6 gap-[20px]"}>
                    {catalogLink.map((catalogList, index) => (
                        <Link key={index}
                              className={cn("transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-lg", (index > 0 && (index === 3 || index === 4)) ? "lg:col-span-3" : "lg:col-span-2")}
                              href={"/catalog/"+catalogList.slug}
                        >
                            <figure className={"relative bg-[#C1C1C1] h-full rounded-[8px] overflow-hidden"}>
                                <Image
                                    src={catalogList.images}
                                    alt={catalogList.name}
                                    width={380}
                                    height={201}
                                    className={"w-full h-full block object-cover"}
                                />
                                <figcaption
                                    className={"absolute top-[15px] left-[16px] py-[10px] px-[19px] mr-[16px] text-white text-[13px] leading-[16px] font-normal bg-[#242424] rounded-full select-none"}
                                >
                                    {catalogList.name}
                                </figcaption>
                            </figure>
                        </Link>
                    ))}
                </footer>
            </div>
        </article>
    )
}
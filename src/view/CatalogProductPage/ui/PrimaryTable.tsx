"use client"
import {type FC, useState} from "react";
import {ICatalog, ICatalogRow} from "@/entities/product/helper/type";
import cn from "clsx";
import Link from "next/link";
import Image from "next/image";


interface IProps {
    data: Omit<ICatalog, "catalog">
}

export const PrimaryTable: FC<IProps> = ({data}) => {

    const {name, rows} = data
    return (
        <div className={"w-full my-[80px]"}>
            <div className="grid grid-cols-4 text-center py-[5px] border-b border-[#D9D9D9]">
                {[
                    "Наименование",
                    name,
                    "Размер мм",
                    "Цена"
                ].map((text, index) => (
                    <div key={text}
                         className={cn("text-[18px] font-medium text-[#0C0C0C] leading-[22px] self-end", index === 0 && "text-left")}>{text}</div>
                ))}
            </div>
            <ul className={"mt-[26px]"}>
                {rows.map((row, index) => (
                    <li key={index}
                        className={"border-b border-[#D9D9D9]"}
                    >
                        <RowTable row={row} />
                    </li>
                ))}
            </ul>

        </div>
    )
}


interface IPropsRow {
    row: ICatalogRow;
}

function RowTable({row}: IPropsRow) {
    const [open, setOpen] = useState<boolean>(false);

    const toggleRow = () => {
        setOpen((open) => !open);
    };
    return (
        <>
            <div
                onClick={() => toggleRow()}
                className={"grid grid-cols-4 justify-items-center py-[10px]  text-[18px] leading-[22px] text-[#0C0C0C] cursor-pointer"}
            >
                <div className={"justify-self-start"}>{row.name}</div>
                <div className={"text-[#33848A] underline underline-offset-4 font-medium"}>
                    {row.gost.map((gostItem, index) => (
                        <Link key={index} href={`/gost/${gostItem}`}>{gostItem}</Link>
                    ))}
                </div>
                <div className={"text-[#33848A] font-medium"}>{row.size}</div>
                <div className={""}>{row.price}</div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[250px]' : 'max-h-0'}`}
            >
                <div className="flex items-start py-[29px] gap-[20px]">
                    {row.image && (
                        <Image
                            className={"rounded-[13px]"}
                            src={row.image}
                            alt={`${row.name} ${row.gost} ${row.size}`}
                            width={255}
                            height={165}
                        />
                    )}
                    {row.design && (
                        <Image
                            className={"rounded-[13px]"}
                            src={row.design}
                            alt={`${row.name} ${row.gost} ${row.size}`}
                            width={255}
                            height={165}
                        />
                    )}
                    <div>
                        <button
                            className={"bg-[#33848A] py-[15px] px-[55px] text-white font-medium text-[13px] leading-[16px] "}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
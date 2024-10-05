import {type FC} from "react";
import {Attention} from "@/shared/ui/Attention";
import type {ICatalog} from "@/entities/product/helper/type";
import {PrimaryTable} from "@/view/CatalogProductPage/ui/PrimaryTable";


interface IProps {
    name: string;
    tables:  Omit<ICatalog, "catalog">[];
}
export const CatalogProductPage:FC<IProps> = ({name, tables}) => {
    return (
        <article className={"pt-[140px]"}>
            <div className={"container border-t border-[#0C0C0C] pt-[36px]"}>
                <header>
                    <h1 className={"text-[#0C0C0C] text-[50px] leading-[61px] font-light"}>{name}</h1>
                </header>

                <footer className={"mb-[100px]"}>
                    <Attention className={"mt-[81px] mb-[35px]"}/>

                    <div className={"flex flex-col gap-y-[74px]"}>
                        {tables.map((table, index)=> (
                            <PrimaryTable key={index} data={table} />
                        ))}
                    </div>
                </footer>
            </div>
        </article>
    )
}


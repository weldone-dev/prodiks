import {Attention} from "@/shared/ui/Attention";
import {Table} from "./ui/Table";
import {getTable} from "@/app/(pages)/catalog/(special)/lead-sheet-dovetail/api/getTable";
import {fetchCurrencies} from "@/entities/services/currencies/currencies.service";
import {fetchLmaMetalPrice} from "@/entities/services/lme/lme.service";


export default async function LeadSheetDovetail() {
    const table = await getTable();
    const currency = await fetchCurrencies();
    const lmeData = await fetchLmaMetalPrice();
    return (
        <article className={"w-full h-full flex justify-center pt-[200px] mb-[100px]"}>
            <div className={"container"}>
                <header>
                    <h1 className={" border-t border-[#0C0C0C] pt-[36px] text-[#0C0C0C] text-[50px] leading-[61px] font-light"}>
                        Свинцовый кирпич &quot;Ласточкин хвост&quot;
                    </h1>
                </header>
                <footer className={"mb-[100px]"}>
                    <Attention className={"mt-[81px] mb-[35px]"}/>

                    <div className={"flex flex-col gap-y-[74px]"}>
                        <Table data={table} currency={currency} lmeData={lmeData}/>
                    </div>
                </footer>
            </div>
        </article>
    )
}
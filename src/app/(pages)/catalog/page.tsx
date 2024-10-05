import {CatalogPage} from "@/view/CatalogPage";
import {getCatalogList} from "@/entities/product/api/getCatalogList";

export default async function Catalog() {
    const catalogList = await getCatalogList();
    return (
        <CatalogPage catalogLink={catalogList}/>
    )
}
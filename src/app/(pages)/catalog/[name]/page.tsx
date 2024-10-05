import {CatalogProductPage} from "@/view/CatalogProductPage";
import {getCatalogList} from "@/entities/product/api/getCatalogList";
import {getNameFromSlug} from "@/entities/product/utils";
import {getProduct} from "@/entities/product/api/getProduct";


export default async function ProductName(
    req: { params: { name: string } }
){
    const slug = decodeURIComponent(req.params.name);
    const catalogList = await getCatalogList();
    const name = getNameFromSlug(catalogList)(slug);
    const tables = await getProduct(name)
    return (
        <CatalogProductPage name={name} tables={tables}/>
    )
}
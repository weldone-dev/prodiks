import type {ICatalogLink} from "@/entities/product/helper/type";

export const getNameFromSlug = (catalogLink: ICatalogLink[])=> (slug: string) => {
    return catalogLink.find(item => item.slug === slug)?.name || ""
}

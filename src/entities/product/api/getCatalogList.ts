import type {ICatalogLink} from "@/entities/product/helper/type";


export const getCatalogList = async (): Promise<ICatalogLink[]> =>([
    {name: "Свинцовый лист", slug: "lead-sheet", images: "/images/catalog-lead-sheet.jpg"},
    {name: "Свинцовая роль", slug: "lead-role", images: "/images/catalog-lead-role.jpg"},
    {name: "Свинцовое литье", slug: "lead-casting", images: "/images/catalog-lead-casting.jpg"},
    {name: "Свинцовый лист - “Ласточкин хвост”", slug: "lead-sheet-dovetail", images: "/images/catalog-lead-sheet-dovetail.jpg"},
    {name: "Свинцовые прокладки для тюбингов", slug: "lead-gaskets-for-tubing", images: "/images/catalog-lead-gaskets-for-tubing.jpg"},
    {name: "Свинцовые изделия", slug: "lead-products", images: "/images/catalog-lead-products.jpg"},
    {name: "Оловянные изделия", slug: "pewter-products", images: "/images/catalog-pewter-products.jpg"},
    {name: "Припои оловянно-свинцовые", slug: "tin-lead-solders", images: "/images/catalog-tin-lead-solders.jpg"},
]);

export interface ICatalogLink {
    name: string;
    slug: string;
    images: string;
}
export interface ICatalogRow {
    name: string;
    gost: string[];
    size: string;
    weight?: number;
    price: number;
    image?: string;
    design?: string;
}
export interface ICatalog {
    name: string;
    catalog: string;
    rows: ICatalogRow[];
}
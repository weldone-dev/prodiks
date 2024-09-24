export interface ChoiceItem {
    id: number,
    code: string,
    alt: string,
    title: string,
    name: string,
    weight: string,
    length: string,
    width: string,
    thickness: string,
    icon: any,
    img: string,
    formula?: any,
    estimateItems: EstimateItem[]
}
export interface EstimateItem {
    name: string,
    metrics: string,
    code: number
}
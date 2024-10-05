
export interface IlmeData {
    date: string;
    metals: IlmeMetals[];
}
export interface IlmeMetals {
    metal: string;
    price: number;
    change: number;
}
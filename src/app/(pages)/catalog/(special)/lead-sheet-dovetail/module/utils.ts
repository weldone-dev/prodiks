
export function calcPrice(priceSb: number, dollar: number, weight?: number ){
    if (weight) {
        return `от ${Math.round(weight * 0.0019 * priceSb * dollar)} руб.`
    } else {
        return '-'
    }
}
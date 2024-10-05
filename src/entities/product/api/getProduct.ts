import type {ICatalog} from "../helper/type";


export const catalogs: ICatalog[] = [
    {
        name: 'Свинцовый лист (стандартный)',
        catalog: 'Свинцовый лист',
        rows: [
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '0,6х500х1000', weight: 2.34, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '0,8х500х1000', weight: 3.12, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '0,5х500х1000', weight: 1.95, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '1,0х500х1000', weight: 3.9, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '1,5х500х1000', weight: 5.85, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '2,0х500х1000', weight: 7.8, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '2,5х500х1000', weight: 9.75, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '3,0х500х1000', weight: 11.7, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '3,5х500х1000', weight: 13.65, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '4,0х500х1000', weight: 15.6, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '4,5х500х1000', weight: 17.55, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '5,0х500х1000', weight: 19.5, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '6,0х500х1000', weight: 23.4, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '7,0х500х1000', weight: 27.3, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '8,0х500х1000', weight: 31.2, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '9,0х500х1000', weight: 35.1, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '10,0х500х1000', weight: 39, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '12,0х500х1000', weight: 46.8, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '15,0х500х1000', weight: 58.5, price: 0, image: "/images/catalog-lead-sheet.jpg"},
            {name: 'Свинцовый лист', gost: ['ГОСТ 9559-89'], size: '20,0х500х1000', weight: 78, price: 0, image: "/images/catalog-lead-sheet.jpg"},
        ]
    },
    {
        name: 'Свинцовый лист (нестандартный)',
        catalog: 'Свинцовый лист',
        rows: [
            {name: 'Свинцовый лист', gost: ['ГОСТ 3778-98'], size: '1,0-20,0х550-800х1000-2000', price: 0},
            {name: 'Свинцовый лист ССуА', gost: ['ГОСТ 1292-81'], size: 'По запросу', price: 0}
        ]
    },
    {
        name: 'Свинцовые прокладки для тюбингов',
        catalog: 'Свинцовые прокладки для тюбингов',
        rows: [
            {name: 'Горизонтальная', gost: ['ГОСТ 3778-98'], size: 'По запросу', price: 0},
            {name: 'Вертикальная', gost: ['ГОСТ 3778-98'], size: 'По запросу', price: 0}
        ]
    },
    {
        name: 'Свинцовое литьё',
        catalog: 'Свинцовое литьё',
        rows: [
            {name: 'Свинцовое литье', gost: ['ГОСТ 3778-98', 'ГОСТ 1292-81'], size: 'по чертежам заказчика', price: 0},
        ]
    },
    {
        name: 'Свинцовый роль',
        catalog: 'Свинцовый роль',
        rows: [
            {name: 'Свинцовый роль', gost: ['ГОСТ 89-2018'], size: '1,0-2,0х500х3500', weight: 13.65, price: 0},
            {name: 'Свинцовый роль', gost: ['ГОСТ 89-2018'], size: '2,0-5,0х500х3500', weight: 27.3, price: 0}
        ]
    },
    {
        name: 'Свинцовые изделия',
        catalog: 'Свинцовые изделия',
        rows: [
            {name: 'Свинцовый пруток', gost: ['ГОСТ 3778-98', 'ГОСТ 1292-81'], size: 'По запросу', price: 0},
            {name: 'Свинцовая проволока', gost: ['ГОСТ 3778-98', 'ГОСТ 1292-81'], size: 'По запросу', price: 0},
            {name: 'Проволока для чеканки швов овал 4,0*6,0', gost: ['ГОСТ 3778-98'], size: 'По запросу', price: 0},
            {name: 'Проволока для чеканки швов овал 9,0*12,0', gost: ['ГОСТ 3778-98'], size: 'По запросу', price: 0},
            {name: 'Проволока для чеканки швов овал 12,0*18,0', gost: ['ГОСТ 3778-98'], size: 'По запросу', price: 0},
            {name: 'Свинцовые аноды', gost: ['ГОСТ 3778-98'], size: 'По запросу', price: 0},
            {name: 'Свинцово–сурьмянистые аноды', gost: ['ГОСТ 1292-81'], size: 'По запросу', price: 0},
            {name: 'Свинцово-оловянные аноды', gost: ['ГОСТ 3778-98', 'ГОСТ 860-75'], size: 'По запросу', price: 0},
        ]
    },
    {
        name: 'Оловянные изделия',
        catalog: 'Оловянные изделия',
        rows: [
            {name: 'Оловянный анод', gost: ['ГОСТ 860-75'], size: 'По запросу', price: 0},
            {name: 'Оловянный пруток', gost: ['ГОСТ 860-75'], size: 'По запросу', price: 0},
            {name: 'Оловянная проволока', gost: ['ГОСТ 860-75'], size: 'По запросу', price: 0},
            {name: 'Оловянные гранулы', gost: ['ГОСТ 860-75'], size: 'По запросу', price: 0},
        ]
    }
]

export const getProduct = async (name: string): Promise<Omit<ICatalog, 'catalog'>[]> => {
    return (
        catalogs.filter((item) => item.catalog === name).map(({catalog, ...rest})=>rest)
    )
}






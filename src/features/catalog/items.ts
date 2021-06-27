import {Brand, Category} from "../product/productSlice";
import {CatalogItem} from "./catalogSlice";
import {bars} from "../count/units";
import {rub} from "../currency/currencies";

const quest: Brand = {
    id: '1',
    title: 'Quest'
}

const proteinBar: Category = {
    id: '1',
    title: 'Protein bar'
}

export const items: CatalogItem[] = [
    {
        id: '1',
        product: {
            id: '1',
            title: 'Cookies & cream',
            whenCreated: new Date(),
            brand: quest,
            category: proteinBar,
            servingSizeG: 60,
            nutritionPerServing: {
                energyKcal: 200,
                carbsG: 21,
                fatG: 8,
                proteinG: 21
            },
        },
        packaging: [
            {
                packaging: {
                    count: {
                        value: 1,
                        units: bars
                    }
                },
                priceTotal: {
                    value: 200,
                    currency: rub
                }
            }
        ],
    }
]

import {quest} from "../brands/brands";
import {proteinBar} from "../categories/categories";
import {Product} from "./model";

export const questCookiesAndCream: Product = {
    id: '1',
    title: 'Cookies & cream',
    whenCreated: new Date().toString(),
    brand: quest,
    categories: [proteinBar],
    servingSizeG: 60,
    nutritionPerServing: {
        energyKcal: 200,
        carbsG: 21,
        fatG: 8,
        proteinG: 21
    }
}

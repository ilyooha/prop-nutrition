import {clif, quest} from "../brands/data";
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

export const chocolateChip: Product = {
    id: '2',
    title: 'Chocolate Chip',
    whenCreated: new Date().toString(),
    brand: clif,
    categories: [proteinBar],
    servingSizeG: 68,
    nutritionPerServing: {
        energyKcal: 260,
        carbsG: 43,
        fatG: 6,
        proteinG: 10
    }
}

export const crunchyPeanutButter: Product = {
    id: '3',
    title: 'Crunchy Peanut Butter',
    whenCreated: new Date().toString(),
    brand: clif,
    categories: [proteinBar],
    servingSizeG: 68,
    nutritionPerServing: {
        energyKcal: 260,
        carbsG: 43,
        fatG: 6,
        proteinG: 10
    }
}

export const whiteChocolateMacadamia: Product = {
    id: '4',
    title: 'White Chocolate Macadamia Nut Flavor',
    whenCreated: new Date().toString(),
    brand: clif,
    categories: [proteinBar],
    servingSizeG: 68,
    nutritionPerServing: {
        energyKcal: 260,
        carbsG: 43,
        fatG: 6,
        proteinG: 10
    }
}

export const chocolateChipAndPeanutButter: Product = {
    id: '5',
    title: 'Chocolate Chip & Peanut Butter',
    whenCreated: new Date().toString(),
    brand: clif,
    categories: [proteinBar],
    servingSizeG: 68,
    nutritionPerServing: {
        energyKcal: 260,
        carbsG: 43,
        fatG: 6,
        proteinG: 10
    }
}

export const chocolateAndPeanutButter: Product = {
    id: '6',
    title: 'Chocolate & Peanut Butter',
    whenCreated: new Date().toString(),
    brand: clif,
    categories: [proteinBar],
    servingSizeG: 68,
    nutritionPerServing: {
        energyKcal: 260,
        carbsG: 43,
        fatG: 6,
        proteinG: 10
    }
}

export const peanutButter: Product = {
    id: '7',
    title: 'Peanut Butter',
    whenCreated: new Date().toString(),
    brand: clif,
    categories: [proteinBar],
    servingSizeG: 68,
    nutritionPerServing: {
        energyKcal: 260,
        carbsG: 43,
        fatG: 6,
        proteinG: 10
    }
}
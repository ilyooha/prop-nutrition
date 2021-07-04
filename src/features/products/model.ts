import {Brand} from "../brands/model";
import {Category} from "../categories/model";

export interface NutritionFacts {
    energyKcal: number;
    proteinG: number;
    fatG: number;
    carbsG: number;
}

export interface Product {
    id: string;
    title: string;
    description?: string;
    brand: Brand;
    categories: Category[];
    whenCreated: Date;
    servingSizeG: number;
    nutritionPer100g?: NutritionFacts;
    nutritionPerServing: NutritionFacts;
}

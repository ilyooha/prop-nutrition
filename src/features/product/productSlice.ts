export interface NutritionFacts {
    energyKcal: number;
    proteinG: number;
    fatG: number;
    carbsG: number;
}

export interface Brand {
    id: string;
    title: string;
}

export interface Category {
    id: string;
    title: string;
}

export interface Product {
    id: string;
    title: string;
    description?: string;
    brand: Brand;
    category: Category;
    whenCreated: Date;
    servingSizeG: number;
    nutritionPer100g?: NutritionFacts;
    nutritionPerServing: NutritionFacts;
}

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NutritionFacts, Product} from "./model";
import {RootState} from "../../app/store";
import {getCategoryById} from "../categories/categorySlice";
import {getBrandById} from "../brands/brandSlice";

type NutritionFactsState = NutritionFacts;

interface ProductState {
    id: string;
    title: string;
    description?: string;
    brandId: string;
    categoryIds: string[];
    whenCreated: string;
    servingSizeG: number;
    nutritionPer100g?: NutritionFactsState;
    nutritionPerServing: NutritionFactsState;
}

export interface ProductStore {
    byId: { [key: string]: ProductState }
}

const initialState: ProductStore = {
    byId: {}
}

const getNutritionFactsState = (facts?: NutritionFacts) => {
    if (facts == null) return null;
    return facts as NutritionFactsState;
}

const getProductState = (product: Product) => {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        brandId: product.brand.id,
        categoryIds: product.categories.map(x => x.id),
        whenCreated: product.whenCreated.toString(),
        servingSizeG: product.servingSizeG,
        nutritionPer100g: getNutritionFactsState(product.nutritionPer100g),
        nutritionPerServing: getNutritionFactsState(product.nutritionPerServing),
    } as ProductState;
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        save: (state, action: PayloadAction<{ products: Product[] }>) => {
            for (const product of action.payload.products) {
                state.byId[product.id] = getProductState(product);
            }
        }
    }
})

export const {save} = productSlice.actions;
export default productSlice.reducer;

export const getProductById = (id: string) => {
    return (rootState: RootState) => {
        const state = rootState.product;
        if (!state.byId.hasOwnProperty(id))
            throw new Error(`Product '${id}' doesn't exist.`)

        const productState = state.byId[id];
        const product: Product = {
            id: productState.id,
            title: productState.title,
            categories: productState.categoryIds
                .map(catId => getCategoryById(catId)(rootState)),
            brand: getBrandById(productState.brandId)(rootState),
            whenCreated: new Date(productState.whenCreated),
            description: productState.description,
            servingSizeG: productState.servingSizeG,
            nutritionPerServing: productState.nutritionPerServing,
            nutritionPer100g: productState.nutritionPer100g
        };

        return product;
    }
}

export const getAllProducts = (rootState: RootState) => {
    const state = rootState.product;
    const products: Product[] = [];
    for (let id in state.byId) {
        if (!state.byId.hasOwnProperty(id)) continue;
        const product = getProductById(id)(rootState);
        products.push(product);
    }
    return products;
}

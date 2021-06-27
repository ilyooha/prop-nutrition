import {Price} from "../price/priceSlice";
import {Packaging} from "../packaging/packagingSlice";
import {LoadingState} from "../loader/loaderSlice";
import {Product} from "../product/productSlice";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchItems} from "./catalogAPI";

export interface CatalogItemPackaging {
    packaging: Packaging;
    priceTotal: Price;
}

export interface CatalogItem {
    id: string;
    product: Product;
    packaging: CatalogItemPackaging[];
}

export interface CatalogState {
    items: CatalogItem[];
    loadingState: LoadingState;
}

export const fetchItemsAsync = createAsyncThunk(
    'catalog/fetchItems',
    async (payload: { offset: number, count: number }) => {
        const response = await fetchItems();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

const initialState: CatalogState = {
    items: [],
    loadingState: 'idle'
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsAsync.pending, (state) => {
                state.loadingState = 'loading';
            })
            .addCase(fetchItemsAsync.fulfilled, (state, action) => {
                state.loadingState = 'idle';
                state.items = state.items.concat(action.payload);
            });
    },
})


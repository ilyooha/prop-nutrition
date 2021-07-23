import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Brand} from "./model";
import {quest} from "./data";
import {RootState} from "../../app/store";

type BrandState = Brand;

export interface BrandStore {
    byId: { [key: string]: BrandState }
}

const initialState: BrandStore = {
    byId: {
        [quest.id]: quest
    },
}

const getBrandState = (brand: Brand) => {
    return brand as BrandState;
}

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        save: (state, action: PayloadAction<{ brands: Brand[] }>) => {
            for (const brand of action.payload.brands) {
                state.byId[brand.id] = getBrandState(brand);
            }
        }
    },
    extraReducers: {}
})

export default brandSlice.reducer;

export const getBrandById = (id: string) => {
    return (rootState: RootState) => {
        const state = rootState.brand;
        if (!state.byId.hasOwnProperty(id))
            throw new Error(`Brand '${id}' doesn't exist.`);

        const brand: Brand = state.byId[id];
        return brand;
    };
}
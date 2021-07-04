import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {Category} from "./model";

interface CategoryState {
    id: string;
    title: string;
}

interface CategoryTreePath {
    ancestorId: string;
    descendantId: string;
    depth: number;
}

export interface CategoryStore {
    byId: { [key: string]: CategoryState };
    treePaths: CategoryTreePath[];
}

const initialState: CategoryStore = {
    byId: {},
    treePaths: []
}

const getCategoryState = (category: Category) => {
    return {
        id: category.id,
        title: category.title
    } as CategoryState;
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        save: (state, action: PayloadAction<{ categories: Category[] }>) => {
            for (const category of action.payload.categories) {
                state.byId[category.id] = getCategoryState(category);

                // todo: tree loading
            }
        }
    },
    extraReducers: {}
})

export const {save} = categorySlice.actions;
export default categorySlice.reducer;

export const getCategoryById = (id: string) => {
    return (rootState: RootState) => {
        const state = rootState.category;
        console.log(state);
        const exists = state.byId.hasOwnProperty(id);
        if (!exists)
            throw new Error(`Category ${id} doesn't exist.`);

        const categoryState = state.byId[id];
        const path = state.treePaths
            .filter(x => x.descendantId === id)
            .sort((one, two) => one.depth - two.depth)
            .map(x => state.byId[x.ancestorId]);

        const category: Category = {
            id: categoryState.id,
            title: categoryState.title,
            path: path
        };

        return category;
    }
}
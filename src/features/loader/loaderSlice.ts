import {createSlice} from "@reduxjs/toolkit";

export type LoadingState = 'idle' | 'loading';

export const idle: LoadingState = 'idle';
export const loading: LoadingState = 'loading';

export interface LoaderState {

}

const initialState: LoaderState = {}

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default loaderSlice.reducer;
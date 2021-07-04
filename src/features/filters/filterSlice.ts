import {createSlice} from "@reduxjs/toolkit";

export interface FilterState {

}

const initialState: FilterState = {}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default filterSlice.reducer;
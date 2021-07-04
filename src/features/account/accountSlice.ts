import {createSlice} from "@reduxjs/toolkit";

export interface AccountState {

}

const initialState: AccountState = {}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: {},
})

export default accountSlice.reducer;
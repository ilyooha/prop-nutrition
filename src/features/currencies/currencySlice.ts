import {createSlice} from "@reduxjs/toolkit";
import {Currency} from "./model";
import {rub} from "./currencies";
import {RootState} from "../../app/store";

const currenciesRegistry: { [key: string]: Currency } = {
    [rub.code]: rub
};

const getAllCodes = () => {
    const keys: string[] = [];
    for (let key in currenciesRegistry) {
        keys.push(key);
    }
    return keys;
}

export interface CurrencyStore {
    codes: string[];
}

const initialState: CurrencyStore = {
    codes: getAllCodes()
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default currencySlice.reducer;

export const getCurrencyByCode = (code: string) => {
    return (rootState: RootState) => {
        const state = rootState.currency;
        const codeUnknown = !state.codes.some(x => x === code);
        if (codeUnknown)
            throw new Error(`The code is not registered: ${code}.`)

        return currenciesRegistry[code];
    }
}

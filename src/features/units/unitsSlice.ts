import {createSlice} from "@reduxjs/toolkit";
import {bars} from "./units";
import {RootState} from "../../app/store";
import {Units} from "./model";

const unitsRegistry: { [key: string]: Units } = {
    [bars.code]: bars
};

const getAllCodes = () => {
    const keys: string[] = [];
    for (let key in unitsRegistry) {
        keys.push(key);
    }
    return keys;
}

export interface UnitsStore {
    codes: string[];
}

const initialState: UnitsStore = {
    codes: getAllCodes()
}

const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default unitsSlice.reducer;

export const getUnitsByCode = (code: string) => {
    return (state: RootState) => {
        const codeUnknown = !state.units.codes.some(x => x === code);
        if (codeUnknown)
            throw new Error(`The code is not registered: ${code}.`)

        return unitsRegistry[code];
    }
}
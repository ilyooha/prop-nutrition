import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MonoPack, MultiPack, Pack, PackItem, PackType} from "./model";
import {RootState} from "../../app/store";
import {getUnitsByCode} from "../units/unitsSlice";
import {getProductById} from "../products/productSlice";
import {Quantity} from "../quantity/model";

interface QuantityState {
    value: number;
    unitsCode: string;
}

interface PackItemState {
    productId: string;
    quantity: QuantityState;
}

interface PackState {
    id: string;
    title: string;
    type: PackType;
}

interface MonoPackState extends PackState {
    type: 'mono';
    contents: PackItemState;
}

interface MultiPackState extends PackState {
    type: 'multi';
    contents: PackItemState[];
}

export interface PackStore {
    byId: { [key: string]: PackState };
}

const initialState: PackStore = {
    byId: {}
}

const getQuantityState = (q: Quantity) => {
    return {
        value: q.value,
        unitsCode: q.units.code
    } as QuantityState;
}

const getPackItemState = (item: PackItem) => {
    return {
        productId: item.product.id,
        quantity: getQuantityState(item.quantity)
    } as PackItemState;
}

const getPackState = (pack: Pack) => {
    switch (pack.type) {
        case 'mono':
            const monoPack = pack as MonoPack;
            const monoPackState: MonoPackState = {
                id: monoPack.id,
                title: monoPack.title,
                type: 'mono',
                contents: getPackItemState(monoPack.contents)
            }
            return monoPackState;
        case 'multi':
            const multiPack = pack as MultiPack;
            const multiPackState: MultiPackState = {
                id: multiPack.id,
                title: multiPack.title,
                type: 'multi',
                contents: multiPack.contents.map(getPackItemState)
            };
            return multiPackState;
        default:
            throw new Error(`Unknown package type: '${pack.type}'.`)
    }
}

const getPackItem = (state: PackItemState) => {
    return (rootState: RootState) => {
        const units = getUnitsByCode(state.quantity.unitsCode)(rootState);
        const product = getProductById(state.productId)(rootState);
        return {
            product: product,
            quantity: {
                value: state.quantity.value,
                units: units
            }
        } as PackItem;
    }
}


const packSlice = createSlice({
    name: 'packs',
    initialState,
    reducers: {
        save: (state, action: PayloadAction<{ packs: Pack[] }>) => {
            for (const pack of action.payload.packs) {
                state.byId[pack.id] = getPackState(pack);
            }
        }
    },
    extraReducers: {}
})

export const {save} = packSlice.actions;
export default packSlice.reducer;

export const getPackById: (id: string) => (rootState: RootState) => Pack =
    (id: string) =>
        (rootState: RootState) => {
            const state = rootState.packaging;
            if (!state.byId.hasOwnProperty(id))
                throw new Error(`Package '${id}' doesn't exist.`);

            const packState = state.byId[id];
            switch (packState.type) {
                case 'mono': {
                    const monoPackState = packState as MonoPackState;
                    const monoPack: MonoPack = {
                        id: monoPackState.id,
                        title: monoPackState.title,
                        type: 'mono',
                        contents: getPackItem(monoPackState.contents)(rootState)
                    };

                    return monoPack as Pack;
                }
                case 'multi': {
                    const multiPackState = packState as MultiPackState;
                    const multiPack: MultiPack = {
                        id: multiPackState.id,
                        title: multiPackState.title,
                        type: 'multi',
                        contents: multiPackState.contents
                            .map(i => getPackItem(i)(rootState))
                    };

                    return multiPack as Pack;
                }
                default:
                    throw new Error(`Unknown pack type: '${packState.type}'.`);
            }
        }

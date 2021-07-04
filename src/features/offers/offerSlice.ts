import {Pack} from "../packs/model";
import {Offer} from "./model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Price} from "../prices/model";
import {RootState} from "../../app/store";
import {getPackById} from "../packs/packSlice";
import {getCurrencyByCode} from "../currencies/currencySlice";

interface PriceState {
    value: number;
    currencyCode: string;
}

interface OfferState {
    id: string;
    packageId: string;
    price: PriceState;
}

export interface OfferStore {
    byId: { [key: string]: OfferState }
}

const initialState: OfferStore = {
    byId: {}
}

const getPriceState = (price: Price) => {
    const state: PriceState = {
        value: price.value,
        currencyCode: price.currency.code
    };
    return state;
}

const getOfferState = <T extends Pack>(offer: Offer<T>) => {
    const state: OfferState = {
        id: offer.id,
        packageId: offer.package.id,
        price: getPriceState(offer.price)
    };
    return state;
}

const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        save: (state, action: PayloadAction<{ offers: Offer<Pack>[] }>) => {
            for (const offer of action.payload.offers) {
                state.byId[offer.id] = getOfferState(offer);
            }
        }
    },
    extraReducers: {}
})

export const {save} = offerSlice.actions;
export default offerSlice.reducer;

export const getOfferById = (id: string) => {
    return (rootState: RootState) => {
        const state = rootState.offer;
        if (!state.byId.hasOwnProperty(id))
            throw new Error(`Offer '${id}' doesn't exist.`);

        const offerState = state.byId[id];
        const pack = getPackById(offerState.packageId)(rootState);
        const offer: Offer<Pack> = {
            id: offerState.id,
            package: pack,
            price: {
                value: offerState.price.value,
                currency: getCurrencyByCode(offerState.price.currencyCode)(rootState)
            }
        };

        return offer;
    }
}

export const getAllOffers = (rootState: RootState) => {
    const offerById = rootState.offer.byId;
    const offerList = [];
    for (const id in offerById) {
        if (!offerById.hasOwnProperty(id))
            continue;

        offerList.push(getOfferById(id)(rootState));
    }
    return offerList;
}
import {idle, loading, LoadingState} from "../loader/loaderSlice";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchItems} from "./catalogAPI";
import {CatalogItem, CatalogItemType, MultiProductCatalogItem, SingleProductCatalogItem} from "./model";
import {Price} from "../prices/model";
import {Pack} from "../packs/model";
import {Offer} from "../offers/model";

type PriceState = Price;

interface OfferState {
    packageId: string;
    price: PriceState;
}

interface CatalogItemState {
    id: string;
    type: CatalogItemType;
}

interface SingleProductCatalogItemState extends CatalogItemState {
    type: 'single';
    productId: string;
    offers: OfferState[];
}

interface MultiProductCatalogItemState extends CatalogItemState, OfferState {
    type: 'multi';
}

export interface CatalogStore {
    byId: { [key: string]: CatalogItemState };
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

const initialState: CatalogStore = {
    byId: {},
    loadingState: idle
}

const getPriceState = (price: Price) => {
    const state: PriceState = {
        value: price.value,
        currencyCode: price.currencyCode
    };
    return state;
}

const getOfferState = <T extends Pack>(offer: Offer<T>) => {
    const state: OfferState = {
        packageId: offer.package.id,
        price: getPriceState(offer.price)
    };
    return state;
}

const getItemState = (item: CatalogItem) => {
    switch (item.type) {
        case 'single':
            const singleItem = item as SingleProductCatalogItem;
            const singleItemState: SingleProductCatalogItemState = {
                id: singleItem.id,
                type: 'single',
                productId: singleItem.id,
                offers: singleItem.offers.map(getOfferState)
            };
            return singleItemState as CatalogItemState;
        case 'multi':
            const multiItem = item as MultiProductCatalogItem;
            const multiItemState: MultiProductCatalogItemState = {
                ...getOfferState(multiItem),
                id: multiItem.id,
                type: 'multi',
            };
            return multiItemState as CatalogItemState;
        default:
            throw new Error(`Unknown catalog item '${item.type}'.`)
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsAsync.pending, (state) => {
                state.loadingState = loading;
            })
            .addCase(fetchItemsAsync.fulfilled, (state, action) => {
                state.loadingState = idle;
                for (const item of action.payload) {
                    state.byId[item.id] = getItemState(item);
                }
            });
    },
})

export default catalogSlice.reducer;
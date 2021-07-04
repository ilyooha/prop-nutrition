import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import accountReducer from '../features/account/accountSlice';
import brandReducer from '../features/brands/brandSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import categoryReducer from '../features/categories/categorySlice';
import currencyReducer from '../features/currencies/currencySlice';
import filterReducer from '../features/filters/filterSlice';
import loaderReducer from '../features/loader/loaderSlice';
import offerReducer from '../features/offers/offerSlice';
import packagingReducer from '../features/packs/packSlice';
import productReducer from '../features/products/productSlice';
import unitsReducer from '../features/units/unitsSlice';

export const store = configureStore({
    reducer: {
        account: accountReducer,
        brand: brandReducer,
        catalog: catalogReducer,
        category: categoryReducer,
        currency: currencyReducer,
        filter: filterReducer,
        loader: loaderReducer,
        offer: offerReducer,
        packaging: packagingReducer,
        product: productReducer,
        units: unitsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

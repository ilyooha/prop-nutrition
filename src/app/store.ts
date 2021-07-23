import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import accountReducer from '../features/account/accountSlice';
import brandReducer from '../features/brands/brandSlice';
import categoryReducer from '../features/categories/categorySlice';
import currencyReducer from '../features/currencies/currencySlice';
import filterReducer from '../features/filters/filterSlice';
import loaderReducer from '../features/loader/loaderSlice';
import productReducer from '../features/products/productSlice';
import unitsReducer from '../features/units/unitsSlice';

export const store = configureStore({
    reducer: {
        account: accountReducer,
        brand: brandReducer,
        category: categoryReducer,
        currency: currencyReducer,
        filter: filterReducer,
        loader: loaderReducer,
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

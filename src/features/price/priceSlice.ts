import {Currency} from "../currency/currencySlice";

export interface Price {
    value: number;
    currency: Currency;
}

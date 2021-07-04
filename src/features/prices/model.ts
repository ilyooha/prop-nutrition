import {Currency} from "../currencies/model";

export interface Price {
    value: number;
    currency: Currency;
}

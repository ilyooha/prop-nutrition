import {Currency} from "./currencySlice";

export const rub: Currency = {
    code: 'RUB',
    formatValue: value => value.toString(),
    sign: '₽'
}
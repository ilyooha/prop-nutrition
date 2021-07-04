import {Currency} from "./model";

export const rub: Currency = {
    code: 'RUB',
    formatValue: value => value.toString(),
    sign: '₽'
}
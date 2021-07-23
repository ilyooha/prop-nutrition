import {Currency} from "./model";

const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
});

export const rub: Currency = {
    code: 'RUB',
    stringify: value => {
        return formatter.format(value);
    }
}

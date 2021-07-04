import {Units} from "./model";

export const bars: Units = {
    code: 'bars',
    stringify: value => value > 1 ? 'bars' : 'bar'
}

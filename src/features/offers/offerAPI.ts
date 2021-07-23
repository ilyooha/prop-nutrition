import * as source from './data';
import {Offer} from "./model";

export function fetchOffers(offset: number = 0, count: number = 20) {
    return new Promise<{ data: Offer[] }>((resolve) =>
        setTimeout(() => resolve({data: source.offers}), 500)
    );
}

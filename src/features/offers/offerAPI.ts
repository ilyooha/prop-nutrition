import * as source from './data';
import {Offer} from "./model";
import {Pack} from "../packs/model";

export function fetchOffers(offset: number = 0, count: number = 20) {
    return new Promise<{ data: Offer<Pack>[] }>((resolve) =>
        setTimeout(() => resolve({data: source.offers}), 500)
    );
}

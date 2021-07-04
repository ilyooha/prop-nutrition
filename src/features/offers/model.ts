// моно-продукт
//  выбор варианта (отличаются по количеству), каждый с ценой
//      полная стоимость: ...
//      цена за штуку, базовая: ... и считаем выгоду

// мульти
//      полная стоимость: ...
//      стоимость по-отдельности: ... и считаем выгоду

import {MonoPack, MultiPack, Pack} from "../packs/model";
import {Price} from "../prices/model";

export interface Offer<T extends Pack> {
    id: string;
    package: T;
    price: Price;
}

export type MonoPackageOffer = Offer<MonoPack>;
export type MultiPackageOffer = Offer<MultiPack>;

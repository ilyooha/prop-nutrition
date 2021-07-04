import {bars} from "../units/units";
import {rub} from "../currencies/currencies";
import {questCookiesAndCream} from "../products/data";
import {MonoPackageOffer, Offer} from "./model";
import {monoPack, Pack} from "../packs/model";

export const offers: Offer<Pack>[] = [
    {
        id: '1',
        package: {
            id: '1',
            type: monoPack,
            title: questCookiesAndCream.title + ' x1',
            contents: {
                product: questCookiesAndCream,
                quantity: {
                    value: 1,
                    units: bars
                }
            }
        },
        price: {
            value: 200,
            currency: rub
        }
    } as MonoPackageOffer,
    {
        id: '2',
        package: {
            id: '2',
            type: monoPack,
            title: questCookiesAndCream.title + ' x12',
            contents: {
                product: questCookiesAndCream,
                quantity: {
                    value: 12,
                    units: bars
                }
            }
        },
        price: {
            value: 1500,
            currency: rub
        }
    } as MonoPackageOffer
]

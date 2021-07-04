import {bars} from "../units/units";
import {rub} from "../currencies/currencies";
import {questCookiesAndCream} from "../products/products";
import {CatalogItem, SingleProductCatalogItem, singleProductCatalogItemType} from "./model";
import {monoPack} from "../packs/model";
import {MonoPackageOffer} from "../offers/model";

export const items: CatalogItem[] = [
    {
        id: '1',
        product: questCookiesAndCream,
        type: singleProductCatalogItemType,
        offers: [
            {
                package: {
                    id: '1',
                    type: monoPack,
                    contents: {
                        product: questCookiesAndCream,
                        quantity: {
                            value: 1,
                            units: bars
                        },
                    }
                },
                price: {
                    value: 200,
                    currency: rub
                }
            } as MonoPackageOffer,
            {
                package: {
                    id: '2',
                    type: monoPack,
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
        ],
    } as SingleProductCatalogItem
]

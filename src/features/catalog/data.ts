import {bars} from "../units/units";
import {rub} from "../currencies/data";
import {questCookiesAndCream} from "../products/data";
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
                            unitsCode: bars.code
                        },
                    }
                },
                price: {
                    value: 200,
                    currencyCode: rub.code
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
                            unitsCode: bars.code
                        }
                    }
                },
                price: {
                    value: 1500,
                    currencyCode: rub.code
                }
            } as MonoPackageOffer
        ],
    } as SingleProductCatalogItem
]

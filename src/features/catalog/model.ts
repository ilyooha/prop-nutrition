import {Product} from "../products/model";
import {MonoPackageOffer, MultiPackageOffer} from "../offers/model";

export type CatalogItemType = 'single' | 'multi';

export const singleProductCatalogItemType: CatalogItemType = 'single';
export const multiProductCatalogItemType: CatalogItemType = 'multi';

export interface CatalogItem {
    id: string;
    type: CatalogItemType;
}

export interface SingleProductCatalogItem extends CatalogItem {
    type: 'single';
    product: Product;
    offers: MonoPackageOffer[];
}

export interface MultiProductCatalogItem extends CatalogItem, MultiPackageOffer {
    type: 'multi';
}

import {Price} from "../prices/model";
import {Product} from "../products/model";
import {Quantity} from "../quantity/model";

export interface Offer {
    id: string;
    title: string;
    images: string[];
    price: Price;
    validFrom: string;
    validUntil: string;
    content: OfferItem[];
}

export interface OfferItem {
    product: Product;
    quantity: Quantity;
}

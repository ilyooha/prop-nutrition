import {Quantity} from "../quantity/model";
import {Product} from "../products/model";

export interface PackItem {
    product: Product;
    quantity: Quantity;
}

export interface Pack {
    id: string;
    title: string;
    type: PackType;
}

export interface MonoPack extends Pack {
    type: 'mono';
    contents: PackItem
}

export interface MultiPack extends Pack {
    type: 'multi',
    contents: PackItem[]
}

export type PackType = 'mono' | 'multi';

export const monoPack: PackType = 'mono';
export const multiPack: PackType = 'multi';

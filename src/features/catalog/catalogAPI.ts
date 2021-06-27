import {CatalogItem} from "./catalogSlice";
import * as source from './items';

export function fetchItems(offset: number = 0, count: number = 20) {
    return new Promise<{ data: CatalogItem[] }>((resolve) =>
        setTimeout(() => resolve({data: source.items}), 500)
    );
}

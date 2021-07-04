import {useAppDispatch, useAppSelector} from "../../app/hooks";
import styles from './Offers.module.css';
import {useEffect} from "react";
import * as categorySlice from "../categories/categorySlice";
import * as offerSlice from "./offerSlice";
import * as packSlice from "../packs/packSlice";
import * as productSlice from "../products/productSlice";
import {Offer} from "./model";
import {MonoPack, MultiPack, Pack} from "../packs/model";
import {fetchOffers} from "./offerAPI";
import {Product} from "../products/model";
import {Category} from "../categories/model";

export const Offers = () => {
    const offers = useAppSelector(offerSlice.getAllOffers);
    const dispatch = useAppDispatch();

    const getProducts = (offers: Offer<Pack>[]) => {
        const products: Product[] = [];
        for (const offer of offers) {
            switch (offer.package.type) {
                case 'mono':
                    const monoPack = offer.package as MonoPack;
                    products.push(monoPack.contents.product);
                    break;
                case 'multi':
                    const multiPack = offer.package as MultiPack;
                    for (const item of multiPack.contents) {
                        products.push(item.product)
                    }
                    break;
                default:
                    throw new Error('oh shit');
            }
        }
        return products;
    }

    useEffect(() => {
        fetchOffers()
            .then(x => {
                const products = getProducts(x.data);
                const categories: Category[] = [];
                for (const product of products) {
                    for (const category of product.categories) {
                        categories.push(category);
                    }
                }
                dispatch(categorySlice.save({categories}));
                dispatch(productSlice.save({products}));
                dispatch(packSlice.save({packs: x.data.map(offer => offer.package)}));
                dispatch(offerSlice.save({offers: x.data}));
            })
    }, []);

    const renderOffer = (offer: Offer<Pack>) => {
        return (
            <div className={styles.item}>
                <div className={styles.picture}>
                    <img alt={offer.package.title}/>
                </div>
                <div className={styles.description}>
                    <h3>{offer.package.title}</h3>
                </div>
            </div>
        );
    }

    const offerList = [];
    for (const key in offers) {
        if (!offers.hasOwnProperty(key)) continue;
        offerList.push(offers[key]);
    }

    return (
        <ul className={styles.List}>
            {offerList.map((offer, i) => (
                <li key={i}>
                    {renderOffer(offer)}
                </li>
            ))}
        </ul>
    )
}
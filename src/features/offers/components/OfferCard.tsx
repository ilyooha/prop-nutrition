import React from 'react';
import {Offer} from "../model";
import {PricePresenter} from "../../prices/PricePresenter";
import {QuantityPresenter} from "../../quantity/QuantityPresenter";
import './OfferCard.scss';

export const OfferCard = (props: { offer: Offer }) => {
    const offer = props.offer;

    // TODO: image carousel
    return (
        <div className="offer-card card">
            <section className="picture-container">
                <img src={offer.images[0]} alt={offer.title}/>
            </section>
            <section className="description">
                <h3 className="title">{offer.title}</h3>
            </section>
            <section className="footer">
                <div className="column">
                    <div className="price">
                        <PricePresenter price={offer.price}/>
                    </div>
                    <div className="content">
                        {
                            offer.content.length === 1 && offer.content[0].product.title === offer.title
                                ? <QuantityPresenter quantity={offer.content[0].quantity}/>
                                : <>
                                    <div>In this package:</div>
                                    <ul>{offer.content.map((item, i) => (
                                        <li key={i} className="offer-item">
                                            <div>{item.product.title} (<QuantityPresenter quantity={item.quantity}/>)</div>
                                        </li>
                                    ))}
                                    </ul>
                                </>
                        }
                    </div>
                </div>
                <div className="column">
                    <button className="add">
                        Add to cart
                    </button>
                </div>
            </section>
        </div>
    );
}

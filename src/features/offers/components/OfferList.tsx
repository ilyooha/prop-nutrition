import {Offer} from "../model";
import {OfferCard} from "./OfferCard";
import './OfferList.scss';

export const OfferList = (props: { offers: Offer[] }) => {
    const {offers} = props;

    return (
        <ul className="offer-list">
            {offers.map(offer => (
                <li className="offer-list-item" key={offer.id}>
                    <OfferCard offer={offer}/>
                </li>
            ))}
        </ul>
    )
}
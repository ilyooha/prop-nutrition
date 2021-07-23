import {Price} from "./model";
import {getCurrencyByCode} from "../currencies/currencySlice";
import {useAppSelector} from "../../app/hooks";

export const PricePresenter = (props: { price: Price }) => {
    const {price} = props;

    const currency = useAppSelector(getCurrencyByCode(price.currencyCode));

    return (
        <>
            {currency.stringify(price.value)}
        </>
    )
}
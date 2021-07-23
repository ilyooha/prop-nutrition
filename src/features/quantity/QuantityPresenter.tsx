import React from 'react';
import {Quantity} from "./model";
import {useAppSelector} from "../../app/hooks";
import {getUnitsByCode} from "../units/unitsSlice";

export const QuantityPresenter = (props: { quantity: Quantity }) => {
    const {quantity} = props;
    const units = useAppSelector(getUnitsByCode(quantity.unitsCode));

    return (
        <>
            {units.stringify(quantity.value)}
        </>
    )
}
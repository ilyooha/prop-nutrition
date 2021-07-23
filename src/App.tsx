import React from 'react';
import './App.scss';
import {OfferList} from "./features/offers/components/OfferList";
import {offers} from "./features/offers/data";

function App() {
    return (
        <div className="App">
            <OfferList offers={offers}/>
        </div>
    );
}

export default App;

import React, {useContext} from "react";
import './../../App.css';
import {Card} from "../card/Card";
import {GlobalContext} from "../../App";


export const CardList = () => {
    const { state: { citiesList } } = useContext(GlobalContext);
    return (
        <div className="CardList">
            {
                citiesList.map(city => <Card key={city} city={city} />)
            }
        </div>
    )
}
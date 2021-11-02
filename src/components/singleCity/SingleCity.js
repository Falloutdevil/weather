import React, {useState, } from "react";
import {Card} from "../card/Card";
import {useForecast} from "../../hooks/useForecast";
import './../../App.css';
import {DailyCard} from "../dailyCard/DailyCard";
import {Link, useParams} from "react-router-dom";


export const SingleCity = () => {
    const params = useParams();
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord);
    const { city } = params;
    return (
        <div className="SingleCityWrap">
            <Link to="/home" className="GoBack">Go back</Link>
            <Card city={city} setCityCoord={setCityCoord} />
            {data &&
            <div className="DailyCards">
                {data.daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
            </div>
            }

        </div>
    )
};

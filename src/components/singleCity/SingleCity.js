import React, {useState, } from "react";
import {Card} from "../card/Card";
import {useForecast} from "../../hooks/useForecast";
import './../../App.css';
import {Link, useParams} from "react-router-dom";
import {DailyCards} from "../dailyCard/DailyCards";


export const SingleCity = () => {
    const params = useParams();
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord);
    const { city } = params;
    return (
        <div className="SingleCityWrap">
            <Link to="/home" className="GoBack">Go back</Link>
            <Card city={city} setCityCoord={setCityCoord} />
            {data && <DailyCards daily={data.daily} />}
        </div>
    )
};

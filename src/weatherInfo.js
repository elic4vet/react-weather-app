import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description} </li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.icon} alt={props.data.decription} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            °C
            <span className="unit"> </span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation 15%</li>
            <li>
              Humidity {""}
              {props.data.humidity}%{" "}
            </li>
            <li>
              {" "}
              Wind {""}
              {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

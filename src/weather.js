import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1> New York </h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img>
            <img
              src="https://img.icons8.com/dusk/64/000000/partly-cloudy-day--v2.png"
              alt="mostly cloudy"
            />
          </img>
          <div className="col-6">
            <ul>
              <li>Precipitation 15%</li>
              <li>Humidity % </li>
              <li> Wind : 13km/h% </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

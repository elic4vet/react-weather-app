import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
          />

          <div className="col-6">
            <input type="submit" value="search" className="btn-btn-primary" />
          </div>
        </div>
      </form>

      <h1> New York </h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://img.icons8.com/dusk/64/000000/partly-cloudy-day--v2.png"
            alt="mostly-cloudy"
          />
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

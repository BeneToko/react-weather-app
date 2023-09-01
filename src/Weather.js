import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <input type="Search" placeholder="Enter a City" />{" "}
        <input type="Submit" value="Search" />
      </form>
      <div className="Weather">
        <h1>London</h1>
        <ul>
          <li>Friday 20:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />{" "}
            20°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 8%</li>
              <li>Humidity: 77%</li>
              <li>Wind: 3 mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Weather.css";
import Axios from "axios";

const apiKey = "tfa2776a4d92b34b1190063a36d411of";
const apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="Search"
              placeholder="Enter a City"
            />
          </div>{" "}
          <div className="col-3">
            <input
              className="btn btn-primary w-100"
              type="Submit"
              value="Search"
            />
          </div>
        </div>
      </form>
      <div className="Weather">
        <h1>London</h1>
        <ul>
          <li>Friday 20:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Partly Cloudy"
                />{" "}
              </div>
              <div className="float-left">
                <span className="temperature">20</span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
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

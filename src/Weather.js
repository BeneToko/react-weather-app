import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState();
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
    });

    setReady(true);
  }

  if (ready) {
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
          <h1>{weatherData.city}</h1>
          <ul>
            <li><FormattedDate date={weatherData.date} /></li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt=""
                  />{" "}
                </div>
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>{" "}
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels Like: {Math.round(weatherData.feelsLike)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "tfa2776a4d92b34b1190063a36d411of";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>"Loading..."</p>;
  }
}

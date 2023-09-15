import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState();
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "tfa2776a4d92b34b1190063a36d411of";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="Search"
                placeholder="Enter a City"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>"Loading..."</p>;
  }
}

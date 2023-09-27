import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Thu</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png"
              alt=""
              width="52"
              height="52"
            />
            <div className="weatherForecast-temperature">
              <span className="weatherForecast-temperature-max">19°</span>
              <span className="weatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const city = props.city.city;
    const apiKey = "tfa2776a4d92b34b1190063a36d411of";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

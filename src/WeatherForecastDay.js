import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}°C`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}°C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div className="weatherForecast-day mt-2">{day()}</div>
      <img src={props.data.condition.icon_url} alt="" />
      <div className="weatherForecast-temperature">
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}

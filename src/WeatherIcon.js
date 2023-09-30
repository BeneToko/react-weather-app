import React from "react";

export default function WeatherIcon(response) {
  const icon = response.data.condition.icon;

  function Icon() {
    return `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;
  }
  return <div>{Icon()}</div>;
}

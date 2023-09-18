import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <h1 className="App-header">
        <footer>
          This website is coded by Benedicte Toko and is
          <a
            className="App-link"
            href="https://github.com/BeneToko/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {""}
            Open-sourced
          </a>
        </footer>
      </h1>
    </div>
  );
}

export default App;

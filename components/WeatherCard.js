import React from "react";

import Sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/cloudy.svg";
import Rainy from "../assets/Rainy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";

function WeatherCard({ city }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={city.forecast}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = WeatherCard;

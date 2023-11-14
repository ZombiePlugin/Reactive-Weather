import React from "react";

import Sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/cloudy.svg";
import Rainy from "../assets/Rainy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";

function Location({ data, location, setLocation }) {
  const found = data.find((element) => element.city === location);
  const icons = [
    { forecast: "Sunny", image: Sunny },
    { forecast: "Cloudy", image: Cloudy },
    { forecast: "Rainy", image: Rainy },
    { forecast: "Partly cloudy", image: PartlyCloudy },
  ];
  function findIcon(forecast) {
    const found = icons.find((element) => element.forecast === forecast);
    return found.image;
  }
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={findIcon(found.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{found.city}</h3>
        <h5 className="card-text">{found.temperature}</h5>
        <h5 className="card-text">{found.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = Location;

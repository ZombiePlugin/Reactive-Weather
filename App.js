import React from "react";
import { useState } from "react";

import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import cities from "./data";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("Berlin");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        <Form location={location} setLocation={setLocation} />
        {/* {cities.map((city) => (
          <WeatherCard city={city} />
        ))} */}
        <Location data={cities} location={location} setLocation={setLocation} />
      </div>
    </>
  );
}

export default App;

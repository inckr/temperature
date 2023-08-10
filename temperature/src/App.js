import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("hot");
  const increaseTemperature = (prop) => {
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);
  };

  const devreaseTemperature = (prop) => {
    const newTemperature = temperatureValue - 1;

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemperature);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}C
        </div>
      </div>
      <div className="button-container">
        <button className="button-container" onClick={() => increaseTemperature(temperatureValue + 1)}>
          +
        </button>
        <button  className="button-container" onClick={() => devreaseTemperature(temperatureValue - 1)}>-
        </button>
      </div>
    </div>
  );
};

export default App;

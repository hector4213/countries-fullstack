import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const WeatherData = ({ country }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {

    const fetchWeather = () => {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country}`
        )
        .then((res) => setWeather(res.data));
    };
    fetchWeather();
  }, [country]);
  console.log(weather);

  if (weather.location === undefined) {
    return null; //works now but feels shitty this component is rerendered twice before is prob the reason why
  }

  return (
    <div>
      <h3>Weather in {weather.location.name}</h3>
      <p>
        <strong>Temperature: </strong>
        {weather.current.temperature}
      </p>
      <img src={weather.current.weather_icons[0]} alt="icon"/>
  <p><strong>wind: </strong>{weather.current.wind_speed}mph direction {weather.current.wind_dir}</p>
    </div>
  );
};

export default WeatherData;

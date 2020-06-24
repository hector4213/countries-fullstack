import React from "react";
import CountryList from "../components/CountryList";
import WeatherData from '../components/WeatherData'

const CountryData = ({ countries, changeFilter}) => {
    
  if (countries.length > 10) {
    return "too many matches, be more specific";
  } else if (countries.length > 1 && countries.length < 11) {
    return <CountryList countries={countries} changeFilter={changeFilter} />;
  } else if (countries.length === 1) {

  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <h1>{country.name}</h1>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h1>Languages</h1>
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img
            src={country.flag}
            alt="flag"
            style={{ maxWidth: "300px", maxHeight: "200px" }}
          />
          <WeatherData country={country.capital} />
        </div>
      ))}
    </div>
  );
};

export default CountryData;

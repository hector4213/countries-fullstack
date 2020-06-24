import React from "react";

const CountryList = ({ countries, changeFilter }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.alpha3Code}>
          {country.name}
          <button onClick={() => changeFilter(country.name)}>show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;

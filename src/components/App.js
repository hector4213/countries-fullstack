import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "../components/Filter";
import CountryData from "../components/CountryData";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = searchTerm
    ? countries.filter(
        (country) =>
          country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      )
    : countries;

  const changeFilter = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Filter onChange={handleSearchChange} searchTerm={searchTerm} />
      <br />
      <CountryData countries={filteredCountries} changeFilter={changeFilter} />
    </div>
  );
};

export default App;

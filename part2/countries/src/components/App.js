import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setFilteredCountries(
      countries.filter(country =>
        country.name.toUpperCase().includes(searchTerm.toUpperCase())
      )
    );
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setCountries(res.data);
    });
  }, []);

  // Handle conditional rendering
  let display;

  if (filteredCountries.length === 1) {
    display = filteredCountries.map(country => (
      <div key={country.alpha3Code}>
        <h2>{country.name}</h2>
        <div>Capital : {country.capital}</div>
        <div>Population: {country.population}</div>
        <h3>Languages:</h3>
        <ul>
          {country.languages.map(language => (
            <li key={language.iso639_2}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} width="300px" alt={`Flag of ${country.name}`} />
      </div>
    ));
  } else if (filteredCountries.length >= 10) {
    display = <div>Too many matches</div>;
  } else if (filteredCountries.length > 0 && filteredCountries.length < 10) {
    display = filteredCountries.map(country => (
      <div key={country.alpha3Code}>{country.name}</div>
    ));
  }

  return (
    <div>
      Find countries:{" "}
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {display}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [detailedCountry, setDetailedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          detailedCountry ? detailedCountry[0].capital : "London"
        }&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => setWeather(res.data));
  }, [detailedCountry]);

  console.log("weather", weather);

  const handleSearch = e => {
    const filtered = countries.filter(country =>
      country.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    if (filtered.length === 1) {
      setDetailedCountry(filtered);
    } else {
      setDetailedCountry(null);
    }
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  console.log("filteredCountries", filteredCountries);

  return (
    <div>
      Find countries:{" "}
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {filteredCountries.length === 1 ? (
        <CountryDetails country={detailedCountry} weather={weather} />
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
};

export default App;

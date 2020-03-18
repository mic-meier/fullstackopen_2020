import React from "react";

const CountryDetails = ({ country, weather }) => {
  if (country) {
    country = country[0];

    return (
      <div>
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
        <h3>Weather in {country.capital}</h3>
        <div>Temperature: {weather.main.temp} ˚C</div>
      </div>
    );
  } else {
    return "";
  }
};

export default CountryDetails;

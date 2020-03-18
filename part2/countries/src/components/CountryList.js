import React from "react";

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return "";
  } else {
    return (
      <div>
        {countries.map(country => (
          <div key={country.alpha3Code}>{country.name}</div>
        ))}
      </div>
    );
  }
};

export default CountryList;

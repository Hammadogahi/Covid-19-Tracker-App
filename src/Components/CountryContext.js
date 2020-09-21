import React, { useState, createContext } from "react";

export const CountryContext = createContext();

export const CountryProvider = (props) => {
  const [countryCount, setCountryCount] = useState(25);
  return (
    <CountryContext.Provider value={[countryCount, setCountryCount]}>
      {props.children}
    </CountryContext.Provider>
  );
};

import React, { useContext } from "react";
import { CountryContext } from "../CountryContext";

const SelectCountriesCount = ({ results }) => {
  const [, setCountryCount] = useContext(CountryContext);
  const handleOnChange = (e) => setCountryCount(e.target.value);

  return (
    <div className="filtersWrapper">
      <div className="countryCount">
        Show
        <select onChange={handleOnChange}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={150}>150</option>
          <option value={results}>All</option>
        </select>
        entries
      </div>
    </div>
  );
};

export default SelectCountriesCount;

import React, { useState, useContext, useEffect } from "react";
import CountryComponent from "./CountryComponent";
import SelectCountriesCount from "./SelectCountriesCount";
import { CountryContext } from "../CountryContext";
import { fetchContriesData } from "../../api";
import countryPreloader from "./30.gif";

const CountryPicker = () => {
  const [countriesData, setCountriesData] = useState({});
  const [countryCount] = useContext(CountryContext);
  useEffect(() => {
    const fetchCountriesData = async () => {
      setCountriesData(await fetchContriesData());
    };

    fetchCountriesData();
  }, []);

  console.log(countriesData);

  if (countriesData.data === undefined) {
    return (
      <div className="countryPreloader">
        <img src={countryPreloader} alt="Country Table Preloader" />
      </div>
    );
  }

  const data = [...countriesData.data];

  return (
    <div className="countryPicker">
      <SelectCountriesCount results={data.length} />
      <table className="countryTable">
        <thead>
          <tr>
            <th>Countries</th>
            <th>Total Cases</th>
            <th>New Cases</th>
            <th>Total Deaths</th>
            <th>New Deaths</th>
            <th>Total Recovered</th>
            <th>Active Cases</th>
            <th>Serious</th>
          </tr>
        </thead>
        <tbody>
          {data.splice(0, countryCount).map((countryData, index) => {
            return (
              <CountryComponent
                country={countryData.country}
                totalCases={countryData.cases}
                newCases={countryData.todayCases}
                deaths={countryData.deaths}
                newDeaths={countryData.todayDeaths}
                totalRecovered={countryData.recovered}
                activeCases={countryData.active}
                serious={countryData.critical}
                key={index}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountryPicker;

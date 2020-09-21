import React from "react";
import CountUp from "react-countup";

const CountryComponent = ({
  country,
  totalCases,
  newCases,
  deaths,
  newDeaths,
  totalRecovered,
  activeCases,
  serious,
  results,
  index,
}) => {
  return (
    <tr>
      <td>{country}</td>
      <td>
        <CountUp start={0} end={totalCases} duration={3} />
      </td>
      <td>
        <CountUp start={0} end={totalCases} duration={3} />
      </td>
      <td>
        <CountUp start={0} end={deaths} duration={3} />
      </td>
      <td className={newDeaths ? "newDeaths" : undefined}>
        <CountUp start={0} end={newDeaths} duration={3} />
      </td>
      <td>
        <CountUp start={0} end={totalRecovered} duration={3} />
      </td>
      <td>
        <CountUp start={0} end={activeCases} duration={3} />{" "}
      </td>
      <td>
        <CountUp start={0} end={serious} duration={3} />
      </td>
    </tr>
  );
};

export default CountryComponent;

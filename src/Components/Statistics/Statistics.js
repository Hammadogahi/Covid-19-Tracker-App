import React from "react";
import preloader from "./805.gif";
import activeCasesImg from "./01.png";
import recoveredCasesImg from "./02.png";
import deathsImg from "./03.png";
import CountUp from "react-countup";

export default ({ data }) => {
  if (!data.confirmed) {
    return (
      <div className="preloader">
        <img src={preloader} alt="Pre loader" />
      </div>
    );
  }
  return (
    <div className="statistics">
      <div className="casesItem">
        <h4>Total Corona Statistics:</h4>
      </div>
      <div className="casesItem">
        <img src={activeCasesImg} alt="Active cases" />
        <div>
          <h4>
            <CountUp start={0} end={data.confirmed.value} duration={2.5} />
          </h4>
          <br></br>
          <p>Active Cases</p>
        </div>
      </div>
      <div className="casesItem">
        <img src={recoveredCasesImg} alt="Recovered Cases" />
        <div>
          <h4>
            <CountUp start={0} end={data.recovered.value} duration={2.5} />
          </h4>
          <br></br>
          <p>Recovered Cases</p>
        </div>
      </div>
      <div className="casesItem">
        <img src={deathsImg} alt="Deaths" />
        <div>
          <h4>
            <CountUp start={0} end={data.deaths.value} duration={2.5} />
          </h4>
          <br></br>
          <p>Deaths</p>
        </div>
      </div>
    </div>
  );
};

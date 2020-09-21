import React, { useEffect, useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

export default ({ stats }) => {
  console.log(stats);
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchedDailyData = async () => {
      const fetchedData = await fetchDailyData();
      setDailyData(fetchedData.data);
    };
    fetchedDailyData();
  }, []);

  if (stats.confirmed === undefined) {
    return "Ok";
  }
  const lineData = {
    labels: dailyData.map((eachData) => eachData.reportDate),
    datasets: [
      {
        label: "Deaths",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#ce0064",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dailyData.map((eachData) => eachData.deaths.total),
      },
      {
        label: "Active Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#7318B4",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dailyData.map((eachData) => eachData.confirmed.total),
      },
    ],
  };

  const doughnutData = {
    labels: ["Confirmed", "Deaths", "Recovered"],
    datasets: [
      {
        data: [
          stats.confirmed.value,
          stats.deaths.value,
          stats.recovered.value,
        ],
        backgroundColor: ["#7318b4", "#ce0064", "#F9871D"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <div className="lineChart">
        <Line data={lineData} />
      </div>
      <div className="doughnutCart">
        <Doughnut data={doughnutData} height={400} />
      </div>
    </div>
  );
};

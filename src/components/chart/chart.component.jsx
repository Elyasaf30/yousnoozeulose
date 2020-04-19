import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

import { Line } from "react-chartjs-2";

import styles from "./chart.module.css";
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    let apiCalled = false;
    if (!apiCalled) {
      const fetchResponse = async () => {
        setDailyData(await fetchDailyData());
      };
      fetchResponse();
      return () => {
        apiCalled = true;
      };
    }
  }, []);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: "origin",
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: "origin",
          },
        ],
      }}
    />
  ) : null;
  return <div className={styles.container}>{LineChart}</div>;
};

export default Chart;

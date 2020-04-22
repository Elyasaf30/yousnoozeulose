import React from "react";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const CardData = [
    {
      title: "Infected",
      data: confirmed,
      display: "Number of active cases of COVID-19",
      id: 1,
      style: styles.infected,
    },
    {
      title: "Recovered",
      data: recovered,
      display: "Number of recoveries from COVID-19",
      id: 2,
      style: styles.recovered,
    },
    {
      title: "Deaths",
      data: deaths,
      display: "Number of deaths caused by COVID-19",
      id: 3,
      style: styles.deaths,
    },
  ];

  return !confirmed ? (
    <div className={styles.loading}>Loading Data...</div>
  ) : (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {CardData.map((info) => (
          <Grid
            key={info.id}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, `${info.style}`)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {info.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={info.data.value}
                  duration={2}
                  separator={","}
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{info.display}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;

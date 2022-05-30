import { useEffect, useState } from "react";
import Shooter from "./shooter";

import classes from "./shooters.module.css";

import Head from "next/head";

const Shooters = () => {
  const [shooters, setShooters] = useState([]);

  useEffect(() => {
    fetch(`/api/shooters`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShooters(data);
      });
  }, []);

  const sortShooters = () => {
    shooters.sort((a, b) => b.goals - a.goals);
  };

  sortShooters();
  return (
    <>
      <Head>
        <title>Król strzelców</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={classes.h1}>Król strzelców</h1>
      <div className={classes.shooters}>
        {shooters.map((shooter, index) => (
          <Shooter key={index} shooter={shooter} place={index + 1} />
        ))}
      </div>
    </>
  );
};

export default Shooters;

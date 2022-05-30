import classes from "./home.module.css";
import Match from "./match";

import { useEffect, useState } from "react";

import Head from "next/head";

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`/api/matches`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMatches(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Terminarz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.home}>
        <h1>TERMINARZ</h1>
        {matches.map((match, index) => (
          <Match key={index} match={match} />
        ))}
      </div>
    </>
  );
};

export default Home;

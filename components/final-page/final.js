import StageTeams from "./stageTeams";

import classes from "./final.module.css";

import { useState, useEffect } from "react";

import Head from "next/head";

const Final = () => {
  const [stage, setStage] = useState("semiFinalMatches");
  const [stageTeams, setStageTeams] = useState();

  const selectHandler = (e) => {
    setStage(e.target.value);
  };

  useEffect(() => {
    fetch(`/api/${stage}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStageTeams(data);
      });
  }, [stage]);

  if (!stageTeams) {
    return (
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Strefa finałowa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.finalPage}>
        <h1>Strefa finałowa</h1>

        <label htmfor="stage">Wybierz fazę:</label>
        <select
          onChange={(e) => selectHandler(e)}
          name="stage"
          id="stage"
          form="stageform"
        >
          <option value="semiFinalMatches">Półfniały</option>
          <option value="finalMatch">Finał</option>
        </select>
        <div className={classes.matches}>
          {stageTeams.map((teams, index) => (
            <StageTeams key={index} teams={teams} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Final;

import classes from "./stageTeam.module.css";

const StageTeams = ({ teams }) => {
  return (
    <>
      <div className={classes.match}>
        <div className={classes.time}>{teams.time}</div>
        <div className={classes.content}>
          <h2>{teams.nameA}</h2>

          <p
            className={
              teams.scoreA > teams.scoreB
                ? "win"
                : teams.scoreA === teams.scoreB
                ? "draw"
                : "lose"
            }
          >
            {teams.scoreA === "" ? <span>-</span> : teams.scoreA}
          </p>
          <p
            className={
              teams.penaltyA > teams.penaltyB
                ? "win"
                : teams.penaltyA === teams.penaltyB
                ? "draw"
                : "lose"
            }
          >
            {teams.penaltyA ? `(${teams.penaltyA})` : ""}
          </p>
          <p>:</p>
          <p
            className={
              teams.penaltyB > teams.penaltyA
                ? "win"
                : teams.penaltyB === teams.penaltyA
                ? "draw"
                : "lose"
            }
          >
            {teams.penaltyB ? `(${teams.penaltyB})` : ""}
          </p>
          <p
            className={
              teams.scoreB > teams.scoreA
                ? "win"
                : teams.scoreA === teams.scoreB
                ? "draw"
                : "lose"
            }
          >
            {teams.scoreB === "" ? <span>-</span> : teams.scoreB}
          </p>

          <h2>{teams.nameB}</h2>
        </div>
      </div>
    </>
  );
};

export default StageTeams;

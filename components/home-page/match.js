import classes from "./match.module.css";

const Match = ({ match }) => {
  return (
    <div className={classes.match}>
      <h1> {match.time}</h1>
      <div className={classes.content}>
        <h2>{match.nameA}</h2>

        <p
          className={
            match.scoreA > match.scoreB
              ? "win"
              : match.scoreA === match.scoreB
              ? "draw"
              : "lose"
          }
        >
          {match.scoreA === "" ? <span>-</span> : match.scoreA}
        </p>
        <p>:</p>
        <p
          className={
            match.scoreB > match.scoreA
              ? "win"
              : match.scoreA === match.scoreB
              ? "draw"
              : "lose"
          }
        >
          {match.scoreB === "" ? <span>-</span> : match.scoreB}
        </p>
        <h2>{match.nameB}</h2>
      </div>
    </div>
  );
};

export default Match;

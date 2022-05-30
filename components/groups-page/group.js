import classes from "./group.module.css";

const Group = ({ team, place }) => {
  return (
    <div className={classes.group}>
      <div className={classes.title}>
        <div>{place}.</div>
        <div>{team.name}</div>
      </div>
      <div className={classes.content}>
        <div> {team.matches}</div>
        <div> {team.wins}</div>
        <div> {team.draws}</div>
        <div> {team.losses}</div>
        <div> {team.goals}</div>
        <div> {team.points}</div>
      </div>
    </div>
  );
};

export default Group;

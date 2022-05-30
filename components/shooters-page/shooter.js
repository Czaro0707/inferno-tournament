import classes from "./shooter.module.css";
import Image from "next/image";

const Shooter = ({ shooter, place }) => {
  return (
    <div className={classes.shooter}>
      <div>
        {place === 1 ? (
          <Image
            src={"/images/king.png"}
            alt="schedule"
            width={24}
            height={24}
          ></Image>
        ) : (
          <>{place}.</>
        )}
      </div>
      <div>{shooter.name}</div>
      <div>{shooter.club}</div>
      <div>{shooter.goals}</div>
    </div>
  );
};

export default Shooter;

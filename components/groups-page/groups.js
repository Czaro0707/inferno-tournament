import Group from "./group";
import classes from "./groups.module.css";

import { useEffect, useState } from "react";

import Head from "next/head";

const Groups = () => {
  const [groupsAfterFetch, setGroupsAfterFetch] = useState();

  useEffect(() => {
    fetch("/api/groups", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGroupsAfterFetch(data);
      });
  }, []);

  if (!groupsAfterFetch) {
    return <p>...Ładowanie danych</p>;
  }

  return (
    <>
      <Head>
        <title>Grupy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.groups}>
        {groupsAfterFetch.map((group, index) => (
          <div key={index} className={classes.group}>
            <h1>{group.name}</h1>
            <div className={classes.header}>
              <div className={classes.left}>
                <div>#</div>
                <div>Nazwa</div>
              </div>

              <div className={classes.right}>
                <div>RM</div>
                <div>W</div>
                <div>R</div>
                <div>P</div>
                <div>B</div>
                <div>Pkt</div>
              </div>
            </div>

            <div className={classes.content}>
              {group.teams.map((team, index) => (
                <Group key={index} team={team} place={index + 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Groups;

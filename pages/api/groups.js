import { URI } from "../../components/api/api";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const MongoClient = require("mongodb").MongoClient;

    let client = new MongoClient(URI);
    await client.connect();
    let db = client.db("tournament");

    const data = await db.collection("groups").find().toArray();

    let groups = data[0].groups;

    groups.map((group) =>
      group.teams.sort((a, b) => {
        if (b.points - a.points === 0) {
          return b.goals - a.goals;
        }
        return b.points - a.points;
      })
    );

    return res.status(200).json(groups);
  }
  if (req.method === "POST") {
    if (req.body.message === "stage") {
      const teams = req.body.stageTeams;
      const MongoClient = require("mongodb").MongoClient;

      let client = new MongoClient(URI);
      await client.connect();
      let db = client.db("tournament");

      const data = await db.collection("groups").find().toArray();

      let groups = data[0].groups;

      groups.map((group) => {
        group.teams.map((team) => {
          teams.map((winTeam) => {
            if (winTeam === team.name) {
              team.isSemiFinal = true;
            }
          });
        });
      });

      await db.collection("groups").findOneAndUpdate(
        {},
        {
          $set: { groups: result[0].groups },
        }
      );

      return res.status(200).json(teams);
    } else {
      const MongoClient = require("mongodb").MongoClient;
      const groups = req.body.groups;
      const matches = req.body.matches;

      let client = new MongoClient(URI);
      await client.connect();
      let db = client.db("tournament");

      // const data = await db.collection("groups").find().toArray();

      // let groupsCollection = data[0].groups;

      groups.forEach((group) => {
        group.teams.forEach((team) => {
          team.wins = 0;
          team.losses = 0;
          team.draws = 0;
          team.goals = 0;
          team.goalsConceded = 0;
          team.points = 0;
          team.matches = 0;
          matches.forEach((match) => {
            if (team.name === match.nameA && match.scoreA !== "") {
              if (match.scoreA > match.scoreB) {
                team.wins = team.wins + 1;
              } else if (match.scoreB > match.scoreA) {
                team.losses = team.losses + 1;
              } else if (match.scoreA === match.scoreB) {
                team.draws = team.draws + 1;
              }
              team.goalsScored = match.scoreA;
              team.goalsConceded = match.scoreB;
              team.points = team.wins * 3 + team.draws;
              team.matches = team.wins + team.losses + team.draws;
              team.goals = team.goalsScored - team.goalsConceded;
            } else if (team.name === match.nameB && match.scoreB !== "") {
              if (match.scoreB > match.scoreA) {
                team.wins = team.wins + 1;
              } else if (match.scoreA > match.scoreB) {
                team.losses = team.losses + 1;
              } else if (match.scoreA === match.scoreB) {
                team.draws = team.draws + 1;
              }
              team.goalsScored = match.scoreB;
              team.goalsConceded = match.scoreA;
              team.points = team.wins * 3 + team.draws;
              team.matches = team.wins + team.losses + team.draws;
              team.goals = team.goalsScored - team.goalsConceded;
            }
          });
        });
      });

      await db.collection("groups").findOneAndUpdate(
        {},
        {
          $set: { groups: groups },
        }
      );
      return res.status(200).json(groups);
    }
  }
}

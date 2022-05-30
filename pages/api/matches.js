import { URI } from "../../components/api/api";

export default async function handler(req, res) {
  const MongoClient = require("mongodb").MongoClient;

  let client = new MongoClient(URI);
  await client.connect();
  let db = client.db("tournament");

  const data = await db.collection("matches").find().toArray();

  const matches = data[0].matches;

  return res.status(200).json(matches.groups);
}

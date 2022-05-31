import { URI } from "../../components/api/api";
const { MongoClient } = require("mongodb");

export default async function handler(req, res) {
  try {
    const client = new MongoClient(URI);
    await client.connect();

    const db = client.db("tournament");

    const data = await db.collection("matches").find().toArray();
    const final = data[0].matches.final;

    return res.status(200).json(final);
  } catch (err) {
    console.log(err);
  }
}

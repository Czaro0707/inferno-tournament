import { URI } from "../../components/api/api";
const { MongoClient } = require("mongodb");

export default async function handler(req, res) {
  try {
    let client = new MongoClient(URI);
    await client.connect();
    let db = client.db("tournament");

    const data = await db.collection("shooters").find().toArray();

    const shooters = data[0].shooters;

    return res.status(200).json(shooters);
  } catch (err) {
    console.log(err);
  }
}

import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://sajid:eQkGtGeUPbD3u820@cluster0.1owdxkf.mongodb.net/auth?retryWrites=true&w=majority"
  );

  return client;
}

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-app";

MongoClient.connect(
  connectURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("users").insertOne(
      {
        name: "Michael",
        age: 25
      },
      (error, result) => {
        if (error) {
          return console.log("unable to insert user");
        }

        console.log(result.ops);
      }
    );
  }
);

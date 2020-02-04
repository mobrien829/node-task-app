const { MongoClient, ObjectID } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-app";

MongoClient.connect(
  connectURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    // use this file below this line as a playground with mongodb
    const db = client.db(databaseName);
    // to find by id, wrap id string in new ObjectID()
    //

    db.collection("users")
      .deleteMany({ age: 26 })
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log(error));
  }
);

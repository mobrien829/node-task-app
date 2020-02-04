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
    //     db.collection("users").findOne({ name: "bleh" }, (error, user) => {
    //       if (!user) {
    //         return console.log("cant find user");
    //       }

    //       console.log(user);
    //     });

    //     db.collection("users")
    //       .find({ age: 25 })
    //       .toArray((error, users) => {
    //         console.log(users);
    //       });

    //     db.collection("users")
    //       .find({ age: 25 })
    //       .count((error, count) => {
    //         console.log(count);
    //       });

    db.collection("tasks").findOne(
      {
        hint: {
          _id: -1
        }
      },
      (error, user) => {
        if (!user) {
          return console.log("cannot find user");
        }
        console.log(user);
      }
    );
  }
);

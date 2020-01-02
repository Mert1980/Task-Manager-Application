// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient; // --> connects to the database
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb"); // --> destructuring mongodb object

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }
    const db = client.db(databaseName);
    db.collection("users").findOne({ name: "Kaan" }, (error, user) => {
      if (error) {
        return console.log("User can not be found!");
      }
      console.log(user);
    });
  }
);

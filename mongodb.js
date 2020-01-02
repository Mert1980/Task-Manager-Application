// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient; // --> connects to the database
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb"); // --> destructuring mongodb object
require("dotenv").config();
// console.log(process.env) --> see the MONGODB_PSWD at the very bottom
const connectionURL = `mongodb://Mert:${process.env.MONGODB_PSWD}@127.0.0.1:27017`;
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }
    const db = client.db(databaseName);
    // find method returns a cursor. Cursor has multiple methods to be used
    db.collection("tasks").findOne(
      { _id: new ObjectID("5e0d151bdaa19027e000ffbc") },
      (error, task) => {
        if (error) {
          return console.log("Unable to find task!");
        }
        console.log(task);
      }
    );
    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("Unable to find task!");
        }
        console.log(tasks);
      });
  }
);

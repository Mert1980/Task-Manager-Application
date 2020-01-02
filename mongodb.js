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
    // find method returns a cursor. Cursor has multiple methods to be used
    db.collection("users")
      .find({ age: 39 })
      .toArray((error, users) => {
        console.log(users);
      });
      db.collection("users")
      .find({ age: 39 })
      .count((error, count) => {
        console.log(count);
      });
  }
);

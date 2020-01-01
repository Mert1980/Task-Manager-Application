// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient; // --> connects to the database
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb"); // --> destructuring mongodb object

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID(); // --> constractor function
console.log(id.id); // --> ID is a binary data instead of a string to reduce the size
console.log(id.id.length); // --> 12
console.log(id.toHexString().length); // --> 24

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne( // --> users is the name of the collection
    //   {
    //     name: "Almira",
    //     age: 3
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }
    //     console.log(result.ops); // --> array of documents
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Yigit",
    //       age: 30
    //     },
    //     {
    //       name: "Kaan",
    //       age: 35
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Weather Application",
    //       completed: true
    //     },
    //     {
    //       description: "ToDo Application",
    //       completed: true
    //     },
    //     {
    //       description: "Task Manager Application",
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks to database!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);

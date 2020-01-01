// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; // --> connects to the database

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
    // db.collection("users").insertOne( // --> users is the name of the collection
    //   {
    //     name: "Mert",
    //     age: 39
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }
    //     console.log(result.ops); // --> array of documents
    //   }
    // );
    db.collection("users").insertMany(
      [
        {
          name: "Yigit",
          age: 30
        },
        {
          name: "Kaan",
          age: 35
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert users!");
        }
        console.log(result.ops);
      }
    );
  }
);

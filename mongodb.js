// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb"); // --> destructuring mongodb object
require("dotenv").config();

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

    db.collection("tasks")
      .deleteOne({
        description: "ToDo Application"
      })
      .then(result => {
        console.log(result.deletedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);

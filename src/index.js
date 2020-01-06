const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.post("/users", (req, res)=>{ // we are sending JSON data via request body
    res.send("testing!")
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const express = require("express");
const router = new express.Router();

router.get("/get", (req, res) => {
  res.send("From a new file");
});

module.exports = router;

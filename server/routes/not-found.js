const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
  });

module.exports = router;
const express = require("express");
const router = express.Router();

const { ProductType } = require("../models/product");
const tariffCalculator = require("../logic/pricing");

router.get("/", async (req, res) => {
  const consumption = req.query.consumption;
  if (!consumption) {
    res.status(400).send("Missing consumption");
    return;
  }
  res.status(200).send(tariffCalculator(consumption));
});

module.exports = router;
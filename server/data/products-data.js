const { Product } = require("../models/product");
const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const path = require('path'); 
const productsFilePath = path.join(__dirname,'products.json');

const productsData = fs.readFileSync(productsFilePath, 'utf8');
const products = JSON.parse(productsData).map(
  (product) =>
    new Product(
      product.name,
      product.type,
      product.baseCost,
      product.additionalKwhCost,
      product.includedKwh
    )
);

module.exports = products;
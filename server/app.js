const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));
const fs = require('fs');

const Product = require('./models/product');

const productsData = fs.readFileSync('./data/products.json');
const products = JSON.parse(productsData).map((product) => {
    return new Product(
      product.name,
      product.type,
      product.baseCost,
      product.additionalKwhCost,
      product.includedKwh,
    )
  });

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/calculate", (req, res) => {
    console.log('------', req.params)
    const consumption = req.params.consumption;
    console.log(consumption)
    const annualCosts = [];
    products.forEach((product) => { 
        annualCosts.push({
            name: product.name,
            annualCost: product.calculateAnnualCost(consumption)
        });
    });
    res.send(annualCosts);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

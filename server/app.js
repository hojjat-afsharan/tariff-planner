const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4200'
}));

const productRoutes = require("./routes/products");
const tariffRoutes = require("./routes/tariffs");
const notFoundRoutes = require("./routes/not-found");

app.get('/', function(req, res){
  res.redirect('/products');
});

app.use("/products", productRoutes);
app.use("/tariffs", tariffRoutes);
app.use(notFoundRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


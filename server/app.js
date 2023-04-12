const express = require("express");
const app = express();

const productRoutes = require("./routes/products");
const tariffRoutes = require("./routes/tariffs");

app.use("/products", productRoutes);
app.use("/tariffs", tariffRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


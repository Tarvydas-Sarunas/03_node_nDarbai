const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

const carsBrands = ["Honda", "Toyota", "Ford"];
// route

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route GET /brends gauti visus brandus
app.get("/brands", (req, res) => {
  res.json(carsBrands);
});

// route POST /brends prideti nauja branda
app.post("/brands", (req, res) => {
  const newBrand = req.body;
  carsBrands.push(newBrand);
  res.json(carsBrands);
});

// linsten
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

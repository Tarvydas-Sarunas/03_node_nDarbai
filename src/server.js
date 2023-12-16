const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

const carsBrands = ["Honda", "Toyota", "Ford"];
const vardai = [
  {
    name: "Sarunas",
    surname: "Tarvydas",
  },
];
// route

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route GET /brends gauti visus brandus
app.get("/brands", (req, res) => {
  res.json(carsBrands);
});

// route GET /api/vardai gauti visus vardus
app.get("/api/vardai", (req, res) => {
  res.json(vardai);
});

// route POST /api/vardi
app.post("/api/vardai", (req, res) => {
  const newVardas = req.body;
  console.log(newVardas);
  vardai.push(newVardas);
  res.json(vardai);
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

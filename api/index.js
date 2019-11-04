const express = require("express");
const app = express();
const port = 5000;
const waveResponse = require("./responses/wave").response;
const weatherResponse = require("./responses/weather").response;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/wave", (req, res) => {
  console.log("Request for /wave");
  res.send(waveResponse());
});

app.get("/wind", (req, res) => res.send("WIND"));

app.get("/tides", (req, res) => res.send("TIDES"));

app.get("/weather", (req, res) => {
  console.log("Request for /weather");
  res.send(weatherResponse());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

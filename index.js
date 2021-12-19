// Import EXPRESS
const express = require("express");

const app = express();
const port = 5000;

// Starting Server

//Verify date Middleware
const verifdate = (req, res, next) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = new Date().getHours();

  if (
    days[new Date().getDay()] !== "Saturday" &&
    days[new Date().getDay()] !== "Sunday" &&
    hour >= 9 &&
    hour < 17
  ) {
    next();
  } else {
    res.send("oops! date not avilable");
  }
};

app.use(verifdate);

// Routing Middleware.

app.use(express.static("Public"));

app.listen(port, () => {
  console.log(` ☻ The server is Running in ${port} port`);
});

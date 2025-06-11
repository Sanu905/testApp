const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello From Reliable Charge !");
});


app.get("/test", (req, res) => {
  res.send("Health is OK !");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
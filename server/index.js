const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://appuser:appus3r@ds229878.mlab.com:29878/invoiceappdb"
);
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "friends" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

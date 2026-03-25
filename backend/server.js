const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/animator");

const User = require("./models/User");

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User created");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);

  if (user) res.send("Success");
  else res.send("Fail");
});

app.listen(5000, () => console.log("Server running"));
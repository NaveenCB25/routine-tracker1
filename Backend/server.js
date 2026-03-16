const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/routineDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/save", async (req, res) => {
  const data = new Task(req.body);
  await data.save();
  res.send("Data saved successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
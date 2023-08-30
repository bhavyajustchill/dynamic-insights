require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const createDynamicModel = require("./models/dynamicModel");

const app = express();
app.use(cors());
app.use(express.json());

const portNo = process.env.PORT;
const connectionString = process.env.MONGODB_CONNECTION_STRING;

async function attemptConnection() {
  await mongoose.connect(connectionString);
}

attemptConnection()
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB Connection Error: " + err));

app.get("/", (req, res) => {
  res.json({
    message: "API is Live!",
  });
});

app.get("/placements", async (req, res) => {
  try {
    const model = createDynamicModel("placements");
    const items = await model.find({});
    res.json(items);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.listen(portNo, () => {
  console.log("Listening on Port: " + portNo);
});

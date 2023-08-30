require("dotenv").config();
const placementData = require("../data/placementData.json");
const connectionString = `${process.env.MONGODB_CONNECTION_STRING}`;
const mongoose = require("mongoose");

// Create a dynamic schema that allows different keys
const dynamicSchema = new mongoose.Schema({}, { strict: false });
// Create a model based on the dynamic schema
const DynamicModel = mongoose.model("Dynamic", dynamicSchema, "placements");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionString).then(() => {
    console.log("Connected to MongoDB");

    placementData.forEach(async (item) => {
      const dynamicObject = new DynamicModel(item);
      try {
        await dynamicObject.save();
        console.log("Saved:", dynamicObject);
      } catch (error) {
        console.error("Error saving object:", error);
      }
    });

    setTimeout(() => {
      mongoose.connection.close();
    }, 5000);
  });
}

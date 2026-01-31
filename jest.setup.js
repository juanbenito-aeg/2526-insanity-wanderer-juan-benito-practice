const mongoose = require("mongoose");
require("dotenv").config();
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

beforeAll(async () => {
  const mongoDbUri = process.env.MONGODB_URI || "";
  await mongoose.connect(mongoDbUri);
  console.log("Connected to MongoDB database.");
});

afterAll(async () => {
  await mongoose.connection.close();
  console.log("Closed connection to MongoDB database.");
});

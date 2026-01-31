const mongoose = require("mongoose");
require("dotenv").config();
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const app = require("./config/server");

async function start() {
  const mongoDbUri = process.env.MONGODB_URI || "";
  await mongoose.connect(mongoDbUri);
  console.log("Connected to MongoDB database.");

  const port = +process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });
}

start();

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const debug = require("debug")("api");

const taskRoutes = require("./routes/tasks");
const { connectDb } = require("./config/connection");


dotenv.config();

async function main() {
  debug("booting %o", "App");


  const app = express();

  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));
  app.use("/api/v1/tasks", taskRoutes);

  app.listen(process.env.PORT, () => {
    console.log("server started running on port 4000");
  });
}

connectDb().then(() => main());

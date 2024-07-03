const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: "https://umbra-hwxnsymgh-denverjoses-projects.vercel.app" }));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const gameRouter = require("./routes/game");
app.use("/games", gameRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

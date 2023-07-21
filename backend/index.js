const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
require('dotenv').config();
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(parser.json());

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Database connected!");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(parser.json());

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

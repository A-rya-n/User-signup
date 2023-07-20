const express = require("express");
const cors = require("cors");
const parser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(parser.json());

app.post("/user/register", (req, res) => {
  console.log("Recieved registration info: ", req.body);
  res.status(200).json({ message: "Registration successful" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

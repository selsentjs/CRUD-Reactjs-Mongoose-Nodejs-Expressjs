require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const studentRouter = require("./routes/studentRoutes");
const cors = require("cors");
const app = express();

// database
const url = process.env.URL;
mongoose.connect(url);
const con = mongoose.connection;
con.on("open", () => {
  console.log("database connected");
});

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use(express.json());
app.use(cors());
app.use("/api/student", studentRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

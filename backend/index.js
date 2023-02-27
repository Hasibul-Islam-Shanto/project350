const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const DbConncetion = require("./dbconfig");
const profileRouter = require("./routes/profileRouter");

mongoose.set("strictQuery", true);
DbConncetion();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.json("Hello world.");
});

app.use("/profile", profileRouter);
app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening at port http://localhost:${process.env.PORT}`
  );
});

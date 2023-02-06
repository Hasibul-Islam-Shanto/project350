const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

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

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening at port http://localhost:${process.env.PORT}`
  );
});

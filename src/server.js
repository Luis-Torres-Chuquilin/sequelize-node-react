/** @format */

import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server runing on port 4000");
});

app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});

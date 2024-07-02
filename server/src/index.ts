import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

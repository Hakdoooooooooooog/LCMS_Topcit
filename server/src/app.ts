import express from "express";
import bodyParser from "body-parser";
import router from "./api/Components/user/routes";
import "dotenv/config";

const app = express();
app.use(bodyParser.json());

// Routes for user
app.use("/api/user", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

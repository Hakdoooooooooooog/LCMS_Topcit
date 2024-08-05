import express, { NextFunction } from "express";
import bodyParser from "body-parser";
import router from "./api/Components/user/routes";
import "dotenv/config";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routes for user
app.use("/api/user", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.SERVER_URL}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

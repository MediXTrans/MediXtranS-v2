import express from "express";
import userRouter from "./routes/user.js";
import textTableRouter from "./routes/textTable.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import morgan from "morgan";

export const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));
app.use(
  cors()
  // cors({
  //   origin: [process.env.FRONTEND_URL],
  //   methods: ["GET", "POST", "PUT", "DELETE"],
  //   credentials: true,
  // })
);

// Using routes
app.use("/api/v2/users", userRouter);
app.use("/api/v2/text", textTableRouter);

app.get("/", (req, res) => {
  console.log("NICE");
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
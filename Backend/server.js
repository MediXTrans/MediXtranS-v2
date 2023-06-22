// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const router = require("./routes/index");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// dotenv.config();

// const app = express();

// app.listen(8000, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Server Started Successfully.");
//   }
// });

// mongoose
//   .connect(process.env.MONGODB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connection Successful");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://medixtrans.vercel.app"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// app.use(express.json());
// app.use("/", router);


import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
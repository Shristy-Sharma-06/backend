import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// ✅ Add JSON body parsing ONLY for routes that are not multipart
// app.use((req, res, next) => {
//   if (req.headers['content-type']?.startsWith("multipart/form-data")) {
//     return next(); // let multer handle it
//   }
//   express.json({ limit: "16kb" })(req, res, () => {
//     express.urlencoded({ extended: true, limit: "16kb" })(req, res, next);
//   });
// });

// routes import 

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users",userRouter)

// http://localhost:8000/api/v1/users/register

export { app };

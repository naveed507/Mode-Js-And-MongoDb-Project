import dotenv from "dotenv";
import express from "express";
import { join } from "path";
import webRoutes from "./routes/web.js";
import bodyParser from "body-parser";
import flash from "express-flash";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import passport from "passport";

import localFile from "./passportConfig/config/local.js";
import passportFile from "./passportConfig/config/passport.js";
import session from "express-session";

dotenv.config();
const app = express();
const port = process.env.PORT;

const mongodbUri = "mongodb://127.0.0.1:27017/custom_crm";
const DB_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(mongodbUri, DB_OPTIONS);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "secret3",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static(join(process.cwd(), "public")));
app.use("/", webRoutes);
app.post(
  "/submitlogin",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`Server Listening at port  http://localhost:${port}`);
});

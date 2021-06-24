import express from "express";
const app = express();
import cors from "cors";
const port = process.env.PORT || 3000;
import connect from "./db/db.js";
connect();
import movieRoutes from "./routes/moviesRoutes.js";
import seriesRoutes from "./routes/seriesRoutes.js";
import trendingTodayRoutes from "./routes/trendingTodayRoutes.js";
import userRoute from "./routes/userRoutes.js";
import bodyparser from "body-parser";
import path from "path";
import bcrypt from "bcrypt";
import hbs from "hbs";
import userModel from "./models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const __dirname = path.resolve();
dotenv.config();

const static_path = path.resolve(__dirname, "./public");
const template_path = path.resolve(__dirname, "./templates/views");
console.log(template_path);

app.use(cors());
app.use(express.static(static_path));

// app.set("view engine", "hbs");
// app.set("views", template_path);

app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/tv", seriesRoutes);
app.use("/movie", movieRoutes);
app.use("/trending", trendingTodayRoutes);
app.use("/user", userRoute);

// app.get("/signup", (req, res) => {
//   const data = {
//     name: "",
//     email: "",
//     password: "",
//   };
//   res.render(template_path + "/signup.hbs", data);
// });

app.post("/signup", async (req, res) => {
  console.log("req", req.body);

  const userSignup = new userModel({
    name: req.body.fullname,
    email: req.body.emailid,
    password: req.body.password,
  
  });

  if (req.body.password !== req.body.confirm_password) {
    return res.status(200).json({ data: {}, message: "password mismatched" });
  } 
  else {
    const salt = await bcrypt.genSalt(10);
    userSignup.password = await bcrypt.hash(req.body.password, salt);

    const result = await userSignup.save();

    return res.status(200).json({
      data: {},
      message: "Signed Up successfully!!",
    });
  }
});

// app.get("/login", (req, res) => {
//   const data = {
//     email: "",
//     password: "",
//   };
//   res.send(template_path + "/login.hbs", data);
// });

app.post("/login", (req, res) => {
  let error = ""
  if(req.body.emailid==="" || req.body.password===""){
    error = "Enter Details first"
    return res.send({ token:"", message: "Login Error",error });
  }

  userModel.findOne({ email: req.body.emailid }, async (err, data) => {
    if (err) throw err;
    console.log({ data });
    if(data === null){
      error = "No such User"
      return res.send({ token:"", message: "Login Error",error });
    }
    
    const isMatch = await bcrypt.compare(req.body.password, data.password);
    console.log(isMatch);
    if (isMatch) {
      const user = { email: req.body.emailid };
      const access_token = jwt.sign(
        user,
        process.env.ACCESS_SECRET_TOKEN,
        (err, token) => {
          if (err) throw err;
          console.log("token", token);
          req.header.token = token;
          res.send({ token, message: "Login Success",error });
        }
      );

      // return res.send({ access_token });
    } else {
      error = "Invalid Credentials"
      return res.send({ token:"", message: "Invalid Credentials",error });
    }
  });
});

app.get("/logout", (req, res) => {
  console.log("working");
  req.header.token = "";
  res.send({ data: [], message: "Logged Out" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

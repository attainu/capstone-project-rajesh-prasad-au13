import express from "express";
import { getuser,postuser,getFavorites } from "../controllers/userController.js";
const userRoute = express.Router();
import auth from "../controllers/auth.js"

// prepend /user
userRoute.get("/get/:email", getuser);
userRoute.post("/post", postuser);
userRoute.get("/profile/getfavorites/:email", auth, getFavorites);


export default userRoute;

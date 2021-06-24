import express from "express";
import { getFavorites, postFavorites, removeFavorites } from "../controllers/userController.js";
const userRoute = express.Router();
import auth from "../controllers/auth.js"

userRoute.get("/profile/getfavorites/:email",auth, getFavorites);
userRoute.post("/profile/postfavorites/:email",auth, postFavorites);
userRoute.post("/profile/removefavorites/:email",auth, removeFavorites);


export default userRoute;

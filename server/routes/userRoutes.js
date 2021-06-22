import express from "express";
import { getuser, getFavorites, postFavorites, removeFavorites } from "../controllers/userController.js";
const userRoute = express.Router();
import auth from "../controllers/auth.js"

// prepend /user
userRoute.get("/get/:email", getuser);
// userRoute.post("/post", postuser);
userRoute.get("/profile/getfavorites/:email", getFavorites);
// userRoute.get("/profile/getfavorites/:email", auth, getFavorites);
userRoute.post("/profile/postfavorites/:email", postFavorites);
userRoute.post("/profile/removefavorites/:email", removeFavorites);


export default userRoute;

import express from "express";
import {
  getDetails,
  searchMoviesById,
  getMovies,
} from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.get("/get", getMovies);
movieRoutes.get("/get/:id", searchMoviesById);
movieRoutes.get("/get/details/:id", getDetails);

export default movieRoutes;

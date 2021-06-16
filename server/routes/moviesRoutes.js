import express from "express";
import { searchMoviesByName, searchMoviesByGenre, searchMoviesByVoteAverage, getMovies, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";
// import { searchMoviesByGenre, searchMoviesByVoteAverage, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.get("/get/:name", searchMoviesByName);
movieRoutes.get("/get/:ids", searchMoviesByGenre);
movieRoutes.get("/get/:vote_average", searchMoviesByVoteAverage);
movieRoutes.get("/get", getMovies);
movieRoutes.post("/post", addMoviesByPage);
movieRoutes.patch("/update/:id", updateMoviesByPage);

export default movieRoutes;
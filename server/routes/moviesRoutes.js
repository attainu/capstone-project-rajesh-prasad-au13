import express from "express";
import { searchMoviesById, searchMoviesByGenre, searchMoviesByVoteAverage, getMovies, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";
// import { searchMoviesByGenre, searchMoviesByVoteAverage, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.get("/get", getMovies);
movieRoutes.get("/get/:id", searchMoviesById);
// movieRoutes.get("/get/:ids", searchMoviesByGenre);
// movieRoutes.get("/get/:vote_average", searchMoviesByVoteAverage);
// movieRoutes.post("/post", addMoviesByPage);
// movieRoutes.patch("/update/:id", updateMoviesByPage);

export default movieRoutes;
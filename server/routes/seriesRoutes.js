import express from "express";
// import { searchMoviesByName, searchMoviesByGenre, searchMoviesByVoteAverage, getMovies, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";
// import { searchMoviesByName, searchMoviesByGenre, searchMoviesByVoteAverage, getMovies, addMoviesByPage, updateMoviesByPage } from "../controllers/seriesController";
// import { searchMoviesByGenre, searchMoviesByVoteAverage, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";
import { getSeries } from "../controllers/seriesController.js";

const seriesRoutes = express.Router();

seriesRoutes.get("/get", getSeries);
// movieRoutes.get("/get/:name", searchMoviesByName);
// movieRoutes.get("/get/:ids", searchMoviesByGenre);
// movieRoutes.get("/get/:vote_average", searchMoviesByVoteAverage);
// movieRoutes.post("/post", addMoviesByPage);
// movieRoutes.patch("/update/:id", updateMoviesByPage);

export default seriesRoutes;

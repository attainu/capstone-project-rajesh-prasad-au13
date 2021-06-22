import express from "express";
// import { searchMoviesByName, searchMoviesByGenre, searchMoviesByVoteAverage, getMovies, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";
// import { searchMoviesByName, searchMoviesByGenre, searchMoviesByVoteAverage, getMovies, addMoviesByPage, updateMoviesByPage } from "../controllers/seriesController";
// import { searchMoviesByGenre, searchMoviesByVoteAverage, addMoviesByPage, updateMoviesByPage } from "../controllers/movieController.js";
import { getSeries, searchSeriesById, getDetails } from "../controllers/seriesController.js";

const seriesRoutes = express.Router();

seriesRoutes.get("/get", getSeries);
seriesRoutes.get("/get/:id", searchSeriesById);
seriesRoutes.get("/get/details/:id", getDetails);
// movieRoutes.get("/get/:name", searchMoviesByName);
// movieRoutes.get("/get/:ids", searchMoviesByGenre);
// movieRoutes.get("/get/:vote_average", searchMoviesByVoteAverage);
// movieRoutes.post("/post", addMoviesByPage);
// movieRoutes.patch("/update/:id", updateMoviesByPage);

export default seriesRoutes;

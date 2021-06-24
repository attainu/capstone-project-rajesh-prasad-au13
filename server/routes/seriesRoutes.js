import express from "express";
import { getSeries, searchSeriesById, getDetails } from "../controllers/seriesController.js";

const seriesRoutes = express.Router();

seriesRoutes.get("/get", getSeries);
seriesRoutes.get("/get/:id", searchSeriesById);
seriesRoutes.get("/get/details/:id", getDetails);

export default seriesRoutes;

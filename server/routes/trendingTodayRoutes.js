import express from "express";
import { getTrendingToday } from "../controllers/trendingTodayController.js";

const trendingTodayRoutes = express.Router();

trendingTodayRoutes.get("/today/get", getTrendingToday);

export default trendingTodayRoutes;






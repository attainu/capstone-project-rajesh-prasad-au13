import mongoose from "mongoose";

const tvSeriesSchema = mongoose.Schema({
  backdrop_path: String,
  first_air_date: String,
  genre_ids: [Number],
  id: Number,
  name: String,
  origin_country: [String],
  original_language: String,
  original_name: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  vote_average: Number,
  vote_count: Number,
});

const tvSeries = new mongoose.model("tvseries", tvSeriesSchema);

export default tvSeries;

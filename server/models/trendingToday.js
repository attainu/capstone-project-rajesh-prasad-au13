import mongoose from "mongoose";

const trendingSchema = new mongoose.Schema({
  id: Number,
  video: { type: Boolean, default: false },
  adult: { type: Boolean, default: false },
  backdrop_path: String,
  first_air_date: String,
  release_date: String,
  genre_ids: [Number],
  original_name: String,
  name: String,
  origin_country: [String],
  original_language: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  vote_average: Number,
  vote_count: Number,
  media_type: String,
});

const trends = new mongoose.model("trends", trendingSchema);

export default trends;

import { query } from "express";
import movies from "../models/moviesModel.js";

console.log(movies);

export const updateMoviesByPage = (req, res) => {
  const page = req.params.id;
  const updateTo = req.body.adult;
  const id = req.body.id;

  movies.updateOne(
    { page: page, "results.id": id },
    {
      $set: {
        "results.$.adult": updateTo,
      },
    },
    (err, done) => {
      if (err) throw err;
      return res.status(200).send({
        responseStatus: true,
        message: "Record Updated Successfully!",
      });
    }
  );
};

export const addMoviesByPage = (req, res) => {
  const moviesData = req.body;
  movies(moviesData).save();

  return res
    .status(200)
    .send({ responseStatus: true, message: "Record Added Successfully!" });
};

export const getMovies = (req, res) => {
  const queryPage = req.query.page;
  console.log(queryPage);
  movies.find({}, (err, data) => {
    if (err) throw err;
    const pages = Math.ceil(data.length / 10);
    console.log(pages);
    let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
    return res.status(200).send({
      responseStatus: true,
      results:ans,
      length:ans.length,
      total_pages:pages,
    });
  });
};

export const searchMoviesByName = (req, res) => {
  console.log(req.params);
  const movie_name = req.params.name;

  movies.findOne({ original_title: movie_name }, (err, data) => {
    if (err) throw err;
    console.log(data);
    return res.status(200).send({ responseStatus: true, data });
  });
};

export const searchMoviesByVoteAverage = (req, res) => {
  const vote = req.params.vote_average;

  movies.find({ vote_average: { $gt: vote } }, (err, data) => {
    if (err) throw err;

    console.log(data); //return an array of data
    return res.status(200).send({ responseStatus: true, data });
  });
};

export const searchMoviesByGenre = (req, res) => {
  const t = req.params.ids;
  const genre_id = t.split(",");
  const queryPage = req.query.page;
  console.log(queryPage);
  //   const genre_id = req.params.ids; //1,3,5

  //  exact matching genre {genre_ids: genre_id}
  //  includes given genre { genre_ids: { $all: genre_id } }

  movies.find({ genre_ids: { $all: genre_id } }, (err, data) => {
    const pages = Math.ceil(data.length / 20);
    console.log(pages);
    let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
    return res.status(200).send({
      responseStatus: true,
      data: ans,
      length: ans.length,
      total_pages: pages,
    });
  });
};

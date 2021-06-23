import movies from "../models/moviesModel.js";
import trend from "../models/trendingToday.js";
// import tvSeries from "../models/seriesModel.js";


export const getMovies = (req, res) => {
  const q = req.query;
  console.log(q.page, q.genre);
  if (q.genre) {
    const genre_id = (q.genre).split(",");
    const queryPage = req.query.page ? req.query.page : 1;
    console.log(queryPage,genre_id);
    //   const genre_id = req.params.ids; //1,3,5

    //  exact matching genre {genre_ids: genre_id}
    //  includes given genre { genre_ids: { $all: genre_id } }

    movies.find({ genre_ids: { $all: genre_id } }, (err, data) => {
      // console.log({data})
      const pages = Math.ceil(data.length / 20);
      console.log(pages);
      let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
      return res.status(200).send({
        responseStatus: true,
        results: ans,
        length: ans.length,
        total_pages: pages,
      });
    });
  } else {
    let ans;
    
    movies.find({}, (err, data) => {
      console.log("heheh")
      if (err) throw err;
      const pages = Math.ceil(data.length / 10);
      console.log(pages);
      q.page
        ? (ans = data.slice(10 * (q.page - 1), q.page * 10))
        : (ans = null);
      return res.status(200).send({
        responseStatus: true,
        results: q.page ? ans : data,
        length: q.page ? ans.length : data.length,
        total_pages: pages,
      });
    });
  }
};

// export const getSeries = (req, res) => {
//   const q = req.query;
//   console.log(q.page, q.genre);
//   if (q.genre) {
//     const genre_id = (q.genre).split(",");
//     const queryPage = req.query.page ? req.query.page : 1;
//     console.log(queryPage,genre_id);
//     //   const genre_id = req.params.ids; //1,3,5

//     //  exact matching genre {genre_ids: genre_id}
//     //  includes given genre { genre_ids: { $all: genre_id } }

//     tvSeries.find({ genre_ids: { $all: genre_id } }, (err, data) => {
//       // console.log({data})
//       const pages = Math.ceil(data.length / 20);
//       console.log(pages);
//       let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
//       return res.status(200).send({
//         responseStatus: true,
//         results: ans,
//         length: ans.length,
//         total_pages: pages,
//       });
//     });
//   } else {
//     let ans;
//     tvSeries.find({}, (err, data) => {
//       if (err) throw err;
//       const pages = Math.ceil(data.length / 10);
//       console.log(pages);
//       q.page
//         ? (ans = data.slice(10 * (q.page - 1), q.page * 10))
//         : (ans = null);
//       return res.status(200).send({
//         responseStatus: true,
//         results: q.page ? ans : data,
//         length: q.page ? ans.length : data.length,
//         total_pages: pages,
//       });
//     });
//   }
// };

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

export const searchMoviesById = (req, res) => {
  // console.log(req.params);
  const movie_id = req.params.id;
  console.log(movie_id);

  movies.findOne({ id: movie_id }, (err, data) => {
    if (err) throw err;
    console.log("dtaaa=>>>>>>>>>>",data);
    return res.status(200).send({ responseStatus: true, data });
  });
};

export const searchMoviesByVoteAverage = (req, res) => {
  const vote = req.params.vote_average;
  console.log({ vote });

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

export const getDetails = (req,res) => {
  let findId = req.params.id
  console.log("getting details")
  movies.findOne({id:findId},(err,data) => {
    return res.status(200).send({responseStatus:true,data})
  })
}

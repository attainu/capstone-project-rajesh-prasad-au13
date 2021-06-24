import tvSeries from "../models/seriesModel.js";

export const getSeries = (req, res) => {
  const q = req.query;
  console.log(q.page, q.genre);
  if (q.genre) {
    const genre_id = (q.genre).split(",");
    const queryPage = req.query.page ? req.query.page : 1;
    console.log(queryPage,genre_id);

    tvSeries.find({ genre_ids: { $all: genre_id } }, (err, data) => {
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
    tvSeries.find({}, (err, data) => {
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


export const searchSeriesById = (req, res) => {
  // console.log(req.params);
  const movie_id = req.params.id;
  console.log(movie_id);

  tvSeries.findOne({ id: movie_id }, (err, data) => {
    if (err) throw err;
    console.log("dtaaa=>>>>>>>>>>",data);
    return res.status(200).send({ responseStatus: true, data });
  });
};


export const getDetails = (req,res) => {
  let findId = req.params.id
  tvSeries.findOne({id:findId},(err,data) => {
    return res.status(200).send({responseStatus:true,data})
  })
}
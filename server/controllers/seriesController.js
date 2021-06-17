import tvSeries from "../models/seriesModel.js";

export const getSeries = (req, res) => {
  const q = req.query;
  console.log(q.page, q.genre);
  if (q.genre) {
    const genre_id = (q.genre).split(",");
    const queryPage = req.query.page ? req.query.page : 1;
    console.log(queryPage,genre_id);
    //   const genre_id = req.params.ids; //1,3,5

    //  exact matching genre {genre_ids: genre_id}
    //  includes given genre { genre_ids: { $all: genre_id } }

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
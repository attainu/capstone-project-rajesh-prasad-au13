import trends from "../models/trendingToday.js";
// import movies from "../models/moviesModel.js"

export const getTrendingToday = (req, res) => {
  const q = req.query;
  console.log("page", q.page);

    let ans;
    trends.find({}, (err, data) => {
      if (err) throw err;
      console.log({data})
    console.log("working 2")

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
  
};

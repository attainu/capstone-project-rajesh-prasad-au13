// import movies from "../models/moviesModel.js";
// import series from "../models/seriesModel.js";

// export const getData = (req, res) => {
//   const q = req.query;
//   const keyword = req.query.keyword;
//   console.log(q, keyword);
//   // console.log(q.page, q.genre);
//   // if (q.genre) {
//   //   const genre_id = (q.genre).split(",");
//   //   const queryPage = req.query.page ? req.query.page : 1;
//   //   console.log(queryPage,genre_id);

//   //   movies.find({ genre_ids: { $all: genre_id } }, (err, data) => {

//   //     const pages = Math.ceil(data.length / 20);
//   //     let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
//   //     return res.status(200).send({
//   //       responseStatus: true,
//   //       results: ans,
//   //       length: ans.length,
//   //       total_pages: pages,
//   //     });
//   //   });
//   // } else {

//   movies.find({ $text: { $search: `${keyword}` } }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     if (data.length > 0) {
//       console.log(1, data);
//       return res.status(200).send({
//         responseStatus: true,
//         results: data,
//         length: data.length,
//       });
//     } else {
//       series.find({ $text: { $search: `${keyword}` } }, (err, data) => {
//         if (err) throw err;
//         if (data.length > 0) {
//           console.log(2);
//           return res.status(200).send({
//             responseStatus: true,
//             results: data,
//             length: data.length,
//           });
//         } else {
//           return res.status(200).send({
//             responseStatus: true,
//             results: [],
//             length: 0,
//           });
//         }
//       });
//     }
//     // const pages = Math.ceil(data.length / 10);
//     // console.log(pages);
//     // q.page
//     //   ? (ans = data.slice(10 * (q.page - 1), q.page * 10))
//     //   : (ans = null);
//     // return res.status(200).send({
//     //   responseStatus: true,
//     //   results: q.page ? ans : data,
//     //   length: q.page ? ans.length : data.length,
//     //   total_pages: pages,
//     // });
//   });
// };

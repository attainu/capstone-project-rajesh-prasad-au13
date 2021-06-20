import userModel from "../models/userModel.js";

export const getuser = (req, res) => {
  userModel.findOne({ email: req.params.email }, (err, data) => {
    if (err) throw err;
    // console.log(data)
    if (data) {
      console.log("welcome user!");
        res.status(200).send({ data, message: "Welcome user!" });
      // if (data.password) {
      //   console.log("welcome user!");
      //   res.status(200).send({ data, message: "Welcome user!" });
      // } else {
      //   console.log("Invalid credentials");
      //   res.end()
      // }
    } else {
      res.status(404).send({ data: [], message: "not a user" });
    }
  });
};

export const postuser = (req,res) => {
    const userData = req.body
    userModel(userData).save()
    return res.status(200).send({data:userData,messgae:"New user added"})
}

export const getFavorites = (req,res) =>{
  const email = req.params.email
  userModel.findOne({email:email}, (err, data) => {
    console.log({data})
    // const pages = Math.ceil(data.length / 20);
    // console.log(pages);
    // let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
    return res.status(200).send({
      responseStatus: true,
      results: data.favorites,
      length: data.length,
      total_pages: Math.ceil(data.length / 20) === 0 ? 1:Math.ceil(data.length / 20),
    });
  });
}

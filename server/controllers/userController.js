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

export const getFavorites = (req, res) => {
  const email = req.params.email;
  userModel.findOne({ email: email }, (err, data) => {
    console.log({ data });
    // const pages = Math.ceil(data.length / 20);
    // console.log(pages);
    // let ans = data.slice(10 * (queryPage - 1), queryPage * 10);
    return res.status(200).send({
      responseStatus: true,
      results: data.favorites,
      length: data.length,
      total_pages:
        Math.ceil(data.length / 20) === 0 ? 1 : Math.ceil(data.length / 20),
    });
  });
};

// export const postuser = (req, res) => {
//   console.log(req.body)
//   const userData = req.body;
//   userModel(userData).save();
//   return res.status(200).send({ data: userData, message: "New user added" });
// };

export const postFavorites = (req, res) => {
  const email = req.body.email;
  console.log("result=>>>>>>", req.body.result);
  console.log(email);
  userModel.updateOne(
    { email: email },
    {
      // console.log('rrrrrrrrrrrr=>>>>>>>',req.body.result)
      $push: {
        favorites: req.body.result,
      },
      // data.favourites:(data.favorites).push(req.body.result);
      // userModel().save()
    },
    (err, success) => {
      if (err) throw err;
      res.status(200).send({ responseStatus: true, message: "updated" });
    }
  );
  // console.log("user=>>>>>>>>>>>>", user)

  // console.log(req.body)
  // user.favorites([req.body]).save()
  // return res.status(200).send({data:[],message:"added favorite"})
};

export const removeFavorites = (req, res) => {
  console.log("heree");
  console.log(req.params)
  console.log(req.body)
  userModel.updateOne({ email: req.params.email }, 
    { $pull: { favorites: { id: req.body.movie_id } } },
    {new:true},
    (err, data) => {
      console.log(data)
      if (err) throw err;
      return res.status(200).send({ responseStatus: true, data });
    }
    );
  };
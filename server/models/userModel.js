import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  favorites:{type:[Object],default:[
    {
    "adult": false,
    "backdrop_path": "/u2J7HxrT9QtzIy37S5q3RdrzxXD.jpg",
    "id": 615457,
    "original_language": "en",
    "original_title": "Nobody",
    "popularity": 1233.282,
    "poster_path": "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
    "release_date": "2021-03-26",
    "title": "Nobody",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 2114
  },
  {
    "adult": false,
    "backdrop_path": "/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg",
    "id": 578701,
    "original_language": "en",
    "original_title": "Those Who Wish Me Dead",
    "popularity": 1130.103,
    "poster_path": "/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
    "release_date": "2021-05-05",
    "title": "Those Who Wish Me Dead",
    "video": false,
    "vote_average": 7,
    "vote_count": 508
  }
]},
  isActive: { type: Boolean, default: true },
});

const userModel = new mongoose.model("users", userSchema);

export default userModel;

const express = require("express");
const router = express.Router();
const { Favourite } = require("../models/Favourite");

const { auth } = require("../middleware/auth");

router.post("/favouriteNumber", auth, (req, res) => {
  // Adding Favourite by MovieId
  Favourite.find({ movieId: req.body.movieId }).exec((err, favourite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favouriteNumber: favourite.length });
  });
});

router.post("/favouriteInfo", auth, (req, res) => {
  // Adding Favourite by MovieId & User
  Favourite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, favourite) => {
    if (err) return res.status(400).send(err);
    let result = false;
    if (favourite.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favouriteInfo: result });
  });
});

router.post("/addToFavourite", auth, (req, res) => {
    // saving the infos about the mov or userId in fav collection
    const favourite = new Favourite(req.body)

    favourite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
    
    });

router.post("/removeFromFavourite", auth, (req, res) => {
     
    Favourite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true, doc })
        })
        
    });

module.exports = router;

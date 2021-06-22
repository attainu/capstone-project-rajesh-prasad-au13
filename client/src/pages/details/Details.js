import React, { useState, useEffect } from "react";
import axios from "axios";
import useHistory from "react-router-dom";

function Details(props) {
  const [data, setData] = useState("");
  console.log({ props });
  console.log("herere");
  const fetchData = () => {
    axios
      .get(`http://localhost:3000/movies/get/details/${props.match.params.id}`)
      .then(res => setData(res.data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="movie-details">
      <div><img
          className="poster"
          src={
            data.poster_path
              ? "https://image.tmdb.org/t/p/w300" + data.poster_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
          }
          alt="img"
        /></div>
      <div>
        <h1 className="movie-name">{data.original_title}</h1>
        <p className="overview">{data.overview}</p>
        <div className="cast"></div>
      </div>
    </div>
  );
}

export default Details;

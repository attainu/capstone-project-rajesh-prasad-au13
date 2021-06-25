import React, { useState, useEffect } from "react";
import axios from "axios";
import "./details.css";

function Details(props) {
  const [data, setData] = useState("abcd");
  console.log({ props });
  console.log("herere");
  let base = (props.location.pathname).includes("/movie/") ? "movie" :"tv"
  console.log(base)
  const fetchData = () => {
    axios
      .get(`https://movie-app-rajesh.herokuapp.com/${base}/get/details/${props.match.params.id}`)
      .then(res => setData(res.data.data));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <h1 className="Heading">Details</h1>
      {
        data ? <div className="title details">
        <div className="bg-img">
          <img
            className="bg-poster"
            src={
              data.backdrop_path ? "https://image.tmdb.org/t/p/w500" + data.backdrop_path
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
            }
            alt="bg-poster"
          />
        </div>
        <div className="img-box">
          <img
            className="poster"
            src={
              data.poster_path
                ? "https://image.tmdb.org/t/p/w300" + data.poster_path
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
            }
            alt="img"
          />
        </div>
        <div className="movie-details">
          <h1 className="movie-name">{data.original_title}</h1>
          <p className="overview">{data.overview}</p>
          {/* <div className="cast"></div> */}
        </div>
      </div> : <h1>No Data Found</h1>
      }
    </>
  );
}

export default Details;

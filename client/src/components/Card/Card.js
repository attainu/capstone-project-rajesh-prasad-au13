import React from "react";
import "./Card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import CancelIcon from "@material-ui/icons/Cancel";
// import Details from "../../pages/details/Details";
import { useHistory } from "react-router-dom";

function Card({
  id,
  poster,
  date,
  title,
  vote_average,
  media_type,
  isFavorite,
}) {

  // console.log(media_type);
  const history = useHistory();
  let email = sessionStorage.getItem("email");

  const handleCardClick = e => {
    console.log(e.target)
    console.log(e.target.id);
    history.push(`/${media_type}/get/details/${e.target.id}`);
  };

  const handleAddFav = e => {
    e.stopPropagation();
    console.log(e.target, e.target.id, e.target.getAttribute("media"));
    let findId = e.target.id;
    const fetchData = findId => {
      axios.get(`http://localhost:3000/${e.target.getAttribute("media")}/get/${findId}`).then(res => 
        axios.post(
          `http://localhost:3000/user/profile/postfavorites/${email}`,
          // http://localhost:3000/user/profile/postfavorites/:${email} Also working
          {
            email: email,
            result: res.data.data,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
      );
    };

    fetchData(findId);
  };
  const handleRemoveFav = e => {
    e.stopPropagation()
    let email = sessionStorage.getItem("email");
    let findId = e.target.id;
    console.log({ findId });

    axios.get(`http://localhost:3000/${e.target.getAttribute("media")}/get/${findId}`).then(res => 
        axios.post(
          `http://localhost:3000/user/profile/removefavorites/${email}`,
          {
            email: email,
            result: res.data.data.id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
      );
      
    // axios.post(
    //   `http://localhost:3000/user/profile/removefavorites/${email}`,
    //   {
    //     email_id: email,
    //     movie_id: findId,
    //   },
    //   {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // );
  };

  
  return (
    //id={id} onClick={handleCardClick}
    // onClick={props.location.pathname==='/movie' || props.location.pathname==='/movies'? handleCardClick : null}

    <div className="card" id={id} onClick={handleCardClick}>
      {sessionStorage.getItem("token") && (
          <div className={isFavorite ? "favorite-tab red" : "favorite-tab"}>
          <FavoriteIcon id={id} media={media_type} onClick={handleAddFav}>
            Click
          </FavoriteIcon>
          <CancelIcon media={media_type} id={id} onClick={handleRemoveFav}/>
          </div>
        )}
      <div className="card_img">
        
        <div className="vote_average">
          <h2>{vote_average}</h2>
        </div>
        <img
          className="poster"
          src={
            poster
              ? "https://image.tmdb.org/t/p/w300" + poster
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
          }
          alt="img"
        />
      </div>
      <div className="card_details">
        <h3>{title}</h3>
        <div>
          <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

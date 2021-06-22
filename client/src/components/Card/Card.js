import React from "react";
import "./Card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import CancelIcon from "@material-ui/icons/Cancel";
import Details from "../../pages/details/Details"
import {useHistory} from "react-router-dom"
function Card({
  id,
  poster,
  date,
  title,
  vote_average,
  media_type,
  favorites,
}) {
  console.log(media_type);
  const history = useHistory()
  let email = sessionStorage.getItem("email");

  const handleCardClick = (e) =>{
    console.log(e.target.id);
    history.push(`/movies/get/details/${e.target.id}`)
    
  }

  const handleRemoveFav = (e) =>{
    let email  = sessionStorage.getItem("email")
    let findId = e.target.id;
    console.log({findId})
    axios.post(`http://localhost:3000/user/profile/removefavorites/${email}`,
    {
      email_id: email,
      movie_id: findId
    },
    {
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
    })
  }

  const handleAddFav = e => {
    console.log(e.target.id);
    let findId = e.target.id;
    const fetchData = findId => {
      axios.get(`http://localhost:3000/movies/get/${findId}`).then(res =>
        axios.post(
          `http://localhost:3000/user/profile/postfavorites/:${email}`,
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

      // axios.post(
      //   `http://localhost:3000/user/profile/postfavorites/:${email}`,
      //   data,
      //   {
      //   headers:{
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // })

      // console.log(responseStatus)
      // axios.post(
      //   `http://localhost:3000/user/profile/postfavorites/:${email}`,
      //   responseStatus,
      //   {
      //   headers:{
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // })
    };

    fetchData(findId);
  };
  return (
    //id={id} onClick={handleCardClick}
    <div className="card">
      <div className="card_img">
        {sessionStorage.getItem("token") && (
          <FavoriteIcon id={id} onClick={handleAddFav}>
            Click
          </FavoriteIcon>
        )}
        {sessionStorage.getItem("token") && (
          <CancelIcon onClick={handleRemoveFav} id={id}/>
        )}
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

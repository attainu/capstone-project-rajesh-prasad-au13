import axios from "axios";
import React, { useEffect, useState } from "react";
import "./favourite.css";

function FavouritePage() {
  const variable = { userFrom: localStorage.getItem("userId") };

  const [FavouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    axios
      .post("/api/favourite/getFavouriteMovies", variable)
      .then((response) => {
        if (response.data.success) {
            console.log(response.data.favorites)
            setFavouriteMovies(response.data.favourites);
        } else {
          alert("Failed to get favourite movies");
        }
      });
  }, []);

  const renderTableBody = FavouriteMovies.map((movie, index) => {
    return (
      <tr>
        <td>{movie.movieTitle}</td>

        {/* <td>{movie.movieRunTime}</td> */}
        <td>
          <button>Remove From Favourites</button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85", margin: "3rem auto" }}>
      <h3> My Favourite Movies</h3>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            {/* <th>Movie RunTime</th> */}
            <th>Remove From Favourites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default FavouritePage;

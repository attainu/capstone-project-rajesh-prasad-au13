import { React, useEffect, useState} from "react";
import axios from "axios";


function Favourite(props) {


    const [FavouriteNumber, setFavouriteNumber] = useState(0)
    const [FavouriteInfo, setFavouriteInfo] = useState(false)

    const variable = {
        userFrom: props.userFrom,
        movieId: props.movieId,
        movieTitle: props.movieInfo.original_title,
        movieImage: props.movieInfo.backdrop_path,
}

    useEffect(() => {


    
        axios.post("/api/favourite/favouriteNumber", variable)
            .then((response) => {
                if (response.data.success) {
                    setFavouriteNumber(response.data.favouriteNumber)
                } else {
                    alert("Failed to Add Favourite");
        }
        });

        axios.post("/api/favourite/favouriteInfo", variable)
            .then((response) => {
                if (response.data.success) {
                    setFavouriteInfo(response.data.favouriteInfo)
                } else {
                    alert("Failed to get Favourite Info");
        }
        });
    }, []);

    const onClickFav = () => {
        if(FavouriteInfo) {
            // If already added
            axios.post('/api/favourite/removeFromFavourite', variable)
                .then(response => {
                    if(response.data.success) {
                        setFavouriteNumber(FavouriteNumber - 1)
                        setFavouriteInfo(!FavouriteInfo)
                    } else {
                        alert('Failed remove from Favourites')
                    }
                })
       


        } else {
            // If not added yet
            axios.post('/api/favourite/addToFavourite', variable)
                .then(response => {
                    if(response.data.success) {
                        setFavouriteNumber(FavouriteNumber + 1)
                        setFavouriteInfo(!FavouriteInfo)
                    } else {
                        alert('Failed to Add to Favourites')
                    }
                })
        }
    }


  return (
    <div>
      <button onClick={onClickFav}>{FavouriteInfo ? "remove from Favourite" : "Add to Favourite"}{FavouriteNumber}</button>
    </div>
  );
}

export default Favourite;

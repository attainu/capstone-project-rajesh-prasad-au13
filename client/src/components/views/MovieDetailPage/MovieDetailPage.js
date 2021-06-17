import { React, useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import { Descriptions, Button } from "antd";

function MovieDetailPage(props) {

    
  const [Movie, setMovie] = useState([]);
  const [Cast, setCast] = useState([]);

  useEffect(() => {
    const movieId = props.match.params.movieId;

    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);

        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                setCast(response.Cast)
            })
      });
  }, []);

  return (
    <div>
      {/* Title Image */}
      {Movie && (
        <MainImage
          image={`${IMAGE_URL}w1280${
            Movie.backdrop_path && Movie.backdrop_path
          }`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      )}

      {/* Info Button */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')} /> */}
          <Button> Add to Favourite</Button>
        </div>

        {/* Movie Info Body */}
        <Descriptions title="Movie Info" bordered>
          <Descriptions.Item label="Title">
            {Movie.original_title}
          </Descriptions.Item>
          <Descriptions.Item label="release_date">
            {Movie.release_date}
          </Descriptions.Item>
          <Descriptions.Item label="revenue">{Movie.revenue}</Descriptions.Item>
          <Descriptions.Item label="runtime">{Movie.runtime}</Descriptions.Item>
          <Descriptions.Item label="vote_average" span={2}>
            {Movie.vote_average}
          </Descriptions.Item>
          <Descriptions.Item label="vote_count">
            {Movie.vote_count}
          </Descriptions.Item>
          <Descriptions.Item label="status">{Movie.status}</Descriptions.Item>
          <Descriptions.Item label="popularity">
            {Movie.popularity}
          </Descriptions.Item>
        </Descriptions>

        {/* Cast Button */}
        <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button> View Cast</Button>
        </div>

      </div>
    </div>
    </div>
  );
}

export default MovieDetailPage;

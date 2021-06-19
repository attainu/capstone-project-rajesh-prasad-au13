import { React, useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import GridCard from "../LandingPage/Sections/GridCard";
import { Descriptions, Button, Row } from "antd";
import Favourite from "./Sections/Favourite";

function MovieDetailPage(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [CastToggle, setCastToggle] = useState(false);
  

  useEffect(() => {
    

    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);

        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setCasts(response.cast);
          });
      });
  }, []);

  const handleClick = () => {
    setCastToggle(!CastToggle);
  };

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

      {/* Info  */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favourite userFrom={localStorage.getItem('userId')} movieId={movieId} movieInfo={Movie}/>
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
          <Descriptions.Item label="vote average" span={2}>
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
            <Button onClickCapture={handleClick}> View Cast</Button>
          </div>

          {/* Cast */}

          {CastToggle && (
            <Row gutter={[4, 4]}>
              {Casts &&
                Casts.map((cast, index) => (
                  <div key={index}>
                    {cast.profile_path && (
                      <GridCard
                        cast
                        image={`${IMAGE_URL}w500${cast.profile_path}`}
                      />
                    )}
                  </div>
                ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;

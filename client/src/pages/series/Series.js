import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import Genres from "../../components/Genre/Genre";
import useGenre from "../../customHooks/useGenre";

function Series() {
  const [list, setlist] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreToId = useGenre(selectedGenres);
  const media_type = "tv";

  const fetchSeries = async () => {

    console.log({ genreToId });
    const { data } = await axios.get(
      `https://movie-app-rajesh.herokuapp.com/tv/get?page=${page}&genre=${genreToId}`
    );
    setTimeout(() => {
      settotalPages(data.total_pages);
      setlist(data.results);
      console.log({ list });
    }, 500);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setlist([]);
    fetchSeries();
    // eslint-disable-next-line
  }, [genreToId, page]);

  return (
    <>
      <h1 className="Heading">Series</h1>
      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="title">
        {list.length !== 0 ? (
          list.map(l => (
            <Card
              key={l.id}
              id={l.id}
              poster={l.poster_path}
              title={l.title || l.name}
              date={l.first_air_date || l.release_date}
              media_type={media_type}
              vote_average={l.vote_average}
              overview={l.overview}
              
            />
          ))
        ) : (
          <SimpleBackdrop open={true} />
        )}
      </div>
        <div className="pagination">
          <CustomPagination setPage={setPage} totalPages={totalPages} />
        </div>
    </>
  );
}

export default Series;

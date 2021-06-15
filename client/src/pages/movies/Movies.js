import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Movies.css";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import Genres from "../../components/Genre/Genre";
import useGenre from "../../customHooks/useGenre";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setlist] = useState([]);
  const [totalPages, settotalPages] = useState(10);
  const genreToId = useGenre(selectedGenres);
  const media_type = "movie";

  const fetchData = async() => {
    // fetch(`http://localhost:3000/movies/get?page=1`)
    // .then(res=>res.json())
    // .then(data => {console.log(data.total_pages);setlist(data.results);settotalPages(data.total_pages)})

    const { data } = await axios.get(`http://localhost:3000/movies/get?page=${page}`)
    setTimeout(() => {
      settotalPages(data.total_pages);
      setlist(data.results);
    }, 500);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setlist([])
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <h1 className="Heading">Movies</h1>
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
            />
          ))
        ) : (
          <SimpleBackdrop open={true} />
        )}
        <CustomPagination setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default Movies;

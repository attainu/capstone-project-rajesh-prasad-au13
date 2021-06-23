import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import Genres from "../../components/Genre/Genre";
import useGenre from "../../customHooks/useGenre";

const Movies = (props) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setlist] = useState([]);
  const [totalPages, settotalPages] = useState(10);
  const genreToId = useGenre(selectedGenres);
  const media_type = "movie";

  const fetchData = async () => {
    // console.log({ genreToId });
    const { data } = await axios.get(
      `http://localhost:3000/movie/get?page=${page}&genre=${genreToId}`
    );
    setTimeout(() => {
      settotalPages(data.total_pages);
      setlist(data.results);
      // console.log({ list });
    }, 0);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setlist([]);
    fetchData();
    // eslint-disable-next-line
  }, [page, genreToId]);

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
                isFavorite={false}
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
};

export default Movies;

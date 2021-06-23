import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import { useHistory } from "react-router-dom";

function Trending() {
  const [list, setlist] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(10);
  const history = useHistory();

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=433b72bbcc8a78f3b6d6d48b30491675&page=${page}`
      // `http://localhost:3000/trending/today/get?page=${page}&genre=${genreToId}`
    );
    console.log(data);
    if(data === null){
      history.push("/notfound")
    }
    setTimeout(() => {
      settotalPages(data.total_pages);
      setlist(data.results);
    }, 0);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setlist([]);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <h1 className="Heading">Trending Today</h1>
      {list.length === 0 ? (
        <SimpleBackdrop open={true} />
      ) : (
        <div className="title">
          {list.map(l => (
            <Card
              key={l.id}
              id={l.id}
              poster={l.poster_path}
              title={l.title || l.name}
              media_type={l.media_type}
              date={l.first_air_date || l.release_date}
              vote_average={l.vote_average}
              overview={l.overview}
            />
          ))}
          <CustomPagination setPage={setPage} totalPages={totalPages} />
        </div>
      )}
    </>
  );
}

export default Trending;

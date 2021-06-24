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
  // const media_type = "movie"

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/trending/today/get?page=${page}`);

    console.log("trendingData", data);
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
      <div className="title">
        {list.length !== 0 ? (
          list.map(l => (
            <Card
              key={l.id}
              id={l.id}
              poster={l.poster_path}
              title={l.title || l.name}
              date={l.first_air_date || l.release_date}
              vote_average={l.vote_average}
              overview={l.overview}  
              media_type={l.release_date ? "movie" : "tv"}          
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

export default Trending;

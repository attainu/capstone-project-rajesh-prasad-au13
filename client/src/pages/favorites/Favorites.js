import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import { useHistory } from "react-router-dom";

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [list, setlist] = useState([]);
  const [totalPages, settotalPages] = useState(10);
  const media_type = "favorite";
  const history = useHistory()
  const fetchData = async () => {
    let email = sessionStorage.getItem("email")
    const { data } = await axios.get(
      `http://localhost:3000/user/profile/getfavorites/${email}`
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
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <h1 className="Heading">Favorites</h1>
      <button onClick={() => history.push('/logout')}>Logout</button>
      <div className="title">
        {list.length !== 0 ? (
          list.map(l => (
            <Card
              favorites={true}
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
      </div>
      <div className="pagination">
        <CustomPagination setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default Favorites;

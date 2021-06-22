import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
// import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import { useHistory } from "react-router-dom";

const Favorites = () => {
  const [loading, setLoading] = useState("No Data");
  const [page, setPage] = useState(1);
  const [list, setlist] = useState([]);
  const [totalPages, settotalPages] = useState(10);
  const media_type = "favorite";
  const history = useHistory();

  const fetchData = async () => {
    let email = sessionStorage.getItem("email");
    const { data } = await axios.get(
      `http://localhost:3000/user/profile/getfavorites/${email}`
    );
    setTimeout(() => {
      settotalPages(data.total_pages);

      setlist(data.results);
      if (list.length === 0) {
        setLoading("No Data");
      }
      // console.log({ list });
    }, 500);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setlist([]);
    setLoading("");
    console.log("therere");
    console.log(list);
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <h1 className="Heading">Your Favorites</h1>
      <button onClick={() => history.push("/logout")}>Logout</button>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="title"
      >
        <div>
          <h2>Welcome {sessionStorage.getItem("email")}</h2>
        </div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {list.length === 0 ? (
            <h2>{loading}</h2>
          ) : (
            list.map(l => (
              <Card
                isFavorite={true}
                key={l.id}
                id={l.id}
                poster={l.poster_path}
                title={l.title || l.name}
                date={l.first_air_date || l.release_date}
                media_type={media_type}
                vote_average={l.vote_average}
              />
            ))
          )}
        </div>
      </div>
      {page > 1 && (
        <div className="pagination">
          <CustomPagination setPage={setPage} totalPages={totalPages} />
        </div>
      )}
    </>
  );
};

export default Favorites;

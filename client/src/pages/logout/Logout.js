import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const fetchData = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");

    await axios.get(`http://localhost:3000/logout`);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
    history.push('/')
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="Heading">Logged Out</h1>
    </>
  );
};

export default Logout;

import axios from "axios";
import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const fetchData = async () => {
    // let email = sessionStorage.getItem("email")
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");

    const { data } = await axios.get(`http://localhost:3000/logout`);
    console.log({ data });
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="Heading">Logged Out</h1>
    </>
  );
};

export default Logout;

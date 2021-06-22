import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import domain from "../../config/config";
import "./login.css";

function Login() {
  window.scroll(0, 0);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        "/login",
        {
          emailid: email,
          password: password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(res => {
        if (res.data && res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("email", email);
          history.push("/favorites");
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1 className="Heading">Login</h1>

      <div>
        <form>
          <label for="email">Email:</label>
          <input
            id="email"
            name="emailid"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label for="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <button id="login" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

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

      <div className="loginForm">
        <form>

          <input
            id="email"
            name="emailid"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

        
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <button id="login" type="submit" onClick={handleSubmit}>
            Login
          </button>
          <a href="/signup">New? SignUp</a>
        </form>
      </div>
    </>
  );
}

export default Login;

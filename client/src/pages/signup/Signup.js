import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [EmailError, setEmailError] = "";
  // const [PasswordError, setPasswordError] = "";
  // const [CPasswordError, setCPasswordError] = "";

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        "/signup",
        {
          name: name,
          emailid: email,
          password: password,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(res => {
        console.log(res);
        // sessionStorage.setItem("token", res.data.token);
        // sessionStorage.setItem("email", email);
        history.push("/login");
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1 className="Heading">Signup</h1>
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={handleName}
            value={name}
            required
          />

          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleEmail}
            value={email}
            required
          />
          {/* <span>{EmailError}</span> */}

          <input
            type="password"
            id="password"
            onChange={handlePassword}
            placeholder="Enter Password"
            value={password}
            required
          />
          {/* <span>{PasswordError}</span> */}

          <input
            type="password"
            id="confirmPassword"
            onChange={handleConfirmPassword}
            placeholder="Confirm Password here"
            value={confirmPassword}
            required
          />
          {/* <span>{CPasswordError}</span> */}

          <button type="submit" id="signup">
            Signup
          </button>
          <a onClick={() => history.push("/login")}>Already a user? Login</a>
        </form>
      </div>
    </>
  );
}

export default Signup;

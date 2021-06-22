import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    <form onSubmit={handleSubmit}>
      <label for="">Name:</label>
      <input type="text" id="name" onChange={handleName} value={name} />

      <label for="">Email:</label>
      <input type="email" id="email" onChange={handleEmail} value={email} />

      <label for="">Password:</label>
      <input
        type="password"
        id="password"
        onChange={handlePassword}
        value={password}
      />

      <label for="">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        onChange={handleConfirmPassword}
        value={confirmPassword}
      />
    </form>
  );
}

export default Signup;

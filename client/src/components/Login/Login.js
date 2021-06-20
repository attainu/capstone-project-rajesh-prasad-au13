import React,{useState} from "react";
import axios from "axios"
import domain from "../../config/config";

function Login() {
    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(domain)
        axios.post(`${domain}/login`,{emailid:email, password:password},{headers:{"Access-Control-Cross-Origin":"*"}})
        .then(res=> console.log(res.data))
        .catch(err => console.log(err))
    }
  return (
      <>
    <h1 className="Heading">Login</h1>
    <div>
      <form>
        <label for="email">Email:</label>
        <input id="email" name="emailid" type="email" value={email}  onChange={e=> setEmail(e.target.value)}/>

        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={ password }
          onChange={e => setpassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;

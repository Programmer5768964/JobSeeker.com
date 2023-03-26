import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user4");
    if (auth) {
      navigate("/");
    }
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setError] = React.useState(false);

  const collectData = async () => {
    // console.log(email, password);

    let result = await fetch("http://localhost:5000/api/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result.email);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }

    // localStorage.setItem("token", JSON.stringify(result.auth));

    // } else {
    //   setError(true);
    // }
  };
  return (
    <div className="login-container">
      <div className="login-register">
        <h1>Login</h1>
        <input
          className="SignupBox"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="SignupBox"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3>
          <Link className="password-forgot" to="forgot">
            <h3>Forgot your password?</h3>
          </Link>
        </h3>
        {/* {error  && <span className='invalid-input' >invalid username or password</span>} */}
        <button className="btn" type="button" onClick={collectData}>
          Login
        </button>
      </div>
      <div className="login-welcome">
        <div className="title">
          <h1 className="h-1">JOB</h1>
          <h1 className="h-2">SEEKER</h1>
        </div>
        <h2>Welcome Back</h2>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};
export default Login;

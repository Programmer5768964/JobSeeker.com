import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Button, Container } from '@material-ui/core'
// import { Avatar } from '@material-ui/core'
// import { LockOutlinedIcon } from '@material-ui/icons'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import Img2 from './img2.jpg'

const SignUp = () => {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const umb = localStorage.getItem("user2");
  //     if (umb) {
  //       navigate("/");
  //     }
  //   });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState(false);
  //   const [color, setColor] = useState("primary");
  console.log(name + email + password);
  const collectData = async () => {
    //   if (!name || !email || !password) {
    //       setError(true);
    //       return false;
    //   }

    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result.email) {
      console.warn(result);
      navigate("/");
    } else {
      console.log("error");
    }

    localStorage.setItem("user", JSON.stringify(result));
    // localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");

    console.warn(name, email, password);
  };

  return (
    <div className="signup-container">
      <div className="register">
        {/* <Avatar className='avatar' sx={{ m: 1, bgcolor: 'secondary' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
        <h1>SignUp</h1>
        <input
          className="SignupBox"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* {error && !name && <span className='invalid-input' >Enter vaild field</span>} */}
        <input
          className="SignupBox"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {error && !email && <span className='invalid-input' >Enter vaild field</span>} */}
        <input
          className="SignupBox"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* {error && !password && <span className='invalid-input' >Enter vaild field</span>} */}
        <button className="btn5" type="button" onClick={collectData}>
          Sign Up
        </button>
      </div>
      <div className="welcome">
        <div className="title1">
          <h1 className="h-11">JOB</h1>
          <h1 className="h-2">SEEKER</h1>
        </div>
        <p>
          JobSeeker is a plateform where people can find the suitable jobs for
          them
        </p>
      </div>
    </div>
  );
};

export default SignUp;

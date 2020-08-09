import React from "react";
import "./Login.css";

function Login() {
  return (
    console.log(process.env.TEST),
    (
      <div className="login">
        <img src="/spotify.jpg" alt="Spotify Logo" />
        <a>LOGIN WITH SPOTIFY</a>
      </div>
    )
  );
}

export default Login;

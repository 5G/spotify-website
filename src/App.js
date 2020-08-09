import React from "react";
import "./App.css";
import Login from "./Login";
import {} from "dotenv/config";

/*
TODO:

- Login Component
  - Logo
  - Login Button
  - OAuth
*/

function App() {
  return (
    <div className="app">
      <Login />
    </div>
    function test() {
      console.log(process.env.TEST);
    }
    test();
  );
}

export default App;

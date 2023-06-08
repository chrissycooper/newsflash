import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="title-container">
        <p className="title">Welcome to NewsFlash </p>
        <p className="App-logo">⚡︎</p>
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NavBar;
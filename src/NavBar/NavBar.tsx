import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

interface NavBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}


const NavBar = ({setSearchTerm}:NavBarProps) => {
  return (
    <div className="navsearch-container">
      <div className="navbar">
        <div className="title-container">
          <p className="title">Welcome to NewsFlash </p>
          <p className="App-logo">⚡︎</p>
        </div>
        <Link to="/"><button>Home</button></Link>
      </div>
      <SearchBar setSearchTerm={setSearchTerm}/>
    </div>
  )
}

export default NavBar;

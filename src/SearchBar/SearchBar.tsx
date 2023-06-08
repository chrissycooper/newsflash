import React, {useState} from "react";
import "./SearchBar.css";

interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({setSearchTerm}:SearchBarProps) => {
  const [input, setInput] = useState("")

  const handleSearch = () => {
    setSearchTerm(input)
  }
  const handleReset = () => {
    setSearchTerm("")
    setInput("")
  }

  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for something!" value={input} onChange={(event)=> {setInput(event?.target.value)}}/>
      <button className="search-btn" onClick={handleSearch}>Go!</button>
      <button className="reset-btn" onClick={handleReset}>Reset Search</button>
    </div>
  )
}

export default SearchBar;
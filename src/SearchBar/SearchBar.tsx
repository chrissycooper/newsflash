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

  return (
    <>
      <input type="text" onChange={(event)=> {setInput(event?.target.value)}}/>
      <button onClick={handleSearch}>Go!</button>
    </>
  )
}

export default SearchBar;
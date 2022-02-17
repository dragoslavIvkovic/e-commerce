	import React from "react";
  import "../_styles/SearchBar.css"
  import {FaSearch} from "react-icons/fa"

const SearchBar = ({value,onChange}) => {
  return (
    <form className="search_container">
      <input
        type="search"
        value={value}
        className="input__search"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
        
      />
   
     
    </form>
  )
}
export default SearchBar
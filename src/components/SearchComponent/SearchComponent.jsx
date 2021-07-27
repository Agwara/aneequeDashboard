import React from "react";

import "./SearchComponent.css";
import searchIcon from "../../assets/search.svg";

const SearchComponent = () => {
  return (
    <div className="search-comp">
      <img
        alt=""
        src={searchIcon}
        height="30"
        width="30"
      />
      <input
        placeholder="Search for product"
        className="search-comp__input" 
      />
    </div>
  )
}

export default SearchComponent;
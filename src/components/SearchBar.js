import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input);
    }
  };

  return (
    <div className="search-bar">
      <h1 className="search-title">Weather Finder</h1>
      <p className="search-subtitle">Enter a city to get current weather details</p>
      <div className="search-input-group">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

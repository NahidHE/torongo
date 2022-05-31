import React, { useState } from "react";
import "./header.css";
import SearchResult from "../searchResult/SearchResult";

export default function Header() {
  const name = "torongo";
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="header-container">
      <div className="title">
        <h1>{name}</h1>
      </div>
      <nav>
        <div className="search">
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              SearchResult(searchTerm);
            }}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <a href="/song">Song</a>
        <a href="/artist">Artist</a>
        <a href="/about">About Me</a>
      </nav>
    </div>
  );
}

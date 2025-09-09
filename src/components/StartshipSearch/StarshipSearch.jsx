import React, { useState } from "react";

//props destructure, passed down props from app.jsx, inside the {x}
function StarshipSearch({ onSearch, onReset, lastSearch, resultsCount }) {
  const [prevSearchTerm, setprevSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(searchTerm); //tells app.jsx update the result what the user typed
    setprevSearchTerm(searchTerm); //the search term user just typed, save into 'prevsearchterm'
    setSearchTerm(""); //reset input field
  };

  return (
    <>
      <p>Number of results: {resultsCount}</p>
      <p>
        {lastSearch
          ? `Last search: ${lastSearch}`
          : "Search for a starship by name."}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>

      {/* // last search has a value = truthy, button gets rendered, shhow button if there is a previous search */}
      {lastSearch && <button onClick={onReset}>Show all starships</button>}
    </>
  );
}

export default StarshipSearch;

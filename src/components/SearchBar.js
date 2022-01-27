import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar({ search, setSearch }) {
  return (
    <form className="d-flex">
      <input
        className="form-control me-sm-2"
        type="text"
        placeholder=" Search ... "
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
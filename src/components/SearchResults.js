import React from "react";

import '../components_styles/SearchResults.css';

import Tracklist from "./Tracklist";

function SearchResults(props) {
  return(
    <div className="SearchResults">
      <h2>Results</h2>
      <hr/>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>
    </div>
  );
};

export default SearchResults;
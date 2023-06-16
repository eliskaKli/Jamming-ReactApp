import React from "react";
import SearchResults from "./SearchResults";

function Tracklist(props) {
    return(
        <div className="searchResults">
            <h2>Results</h2>
            <div>
                <SearchResults 
                    className="results"
                    strings={props}
                />
            {/* {props.target.value} ?? jenom koncept myšlenek */}
            </div>
        </div>
    )
};

export default Tracklist;
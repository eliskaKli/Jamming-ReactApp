import React from "react";
import '../components_styles/SearchResults.css';

function SearchResults(props) {
  return(
    <div>
        {/* <ul>{props.strings.map((string, i) => 
            (<li 
                key={'string' + i}
                className=""
                onClick={() => props.onSelectItem(string)}
            >
                <div>{string.name}</div>
                <div>{string.artist}</div>
                <div>{string.album}</div>
            </li>
          ))}
        </ul> */}
    </div>
  )
};

export default SearchResults;
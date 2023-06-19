import React, { useState, useCallback } from 'react';
import '../components_styles/SearchBar.css';
//import { icon } from '../img/search-icon.svg';

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, [] );

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return(
        <div className="SearchBar">
            <div className="Search">
                <input 
                    className="SearchInput"
                    type="text"
                    placeholder="Type here for the song"
                    name="searchInput"
                    value={props.value}
                    onChange={handleTermChange}/>
                <button className='SearchButton' onClick={search}>
                    {/* <img className="searchIcon" src="../img/search-icon.svg" alt="Search"/> */}
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
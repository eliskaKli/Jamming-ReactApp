import React, { useState } from 'react';
import './SearchBar.css';
// import { icon } from '../img/search-icon.svg';

function SearchBar(props) {

    return(
        <div className="searchBar">
            <div className="search">
                <input 
                    className="searchInput"
                    type="text"
                    placeholder="Type here for the song"
                    name="searchInput"
                    value={props.value}
                    onChange={(event) => props.onSearch(event.target.value)}/>
                <button className='searchButton'>
                    <img className="searchIcon" src="../img/search-icon.svg" alt="Search"/>
                </button>
            </div>
            
        </div>
    )
};

export default SearchBar;
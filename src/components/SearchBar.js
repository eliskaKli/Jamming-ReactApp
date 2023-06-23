import React, { useState, useCallback } from 'react';
import '../components_styles/SearchBar.css';

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return(
        <div className="SearchBar">
                <input 
                    className="SearchInput"
                    type="text"
                    placeholder="Type here the song title"
                    onChange={handleTermChange}/>
                <button className='SearchButton' onClick={search} />
        </div>
    );
};

export default SearchBar;
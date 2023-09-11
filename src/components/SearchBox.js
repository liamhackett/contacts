import React from "react";
import './SearchBox.css';
const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--gray .search-bar"
                type="search" 
                placeholder="Search" 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
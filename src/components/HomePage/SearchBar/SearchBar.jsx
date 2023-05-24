import React from 'react';
import './SearchBar.css';
import '@fortawesome/fontawesome-free/css/all.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <i className="fa fa-search" />
      </button>
    </div>
  );
};

export default SearchBar;

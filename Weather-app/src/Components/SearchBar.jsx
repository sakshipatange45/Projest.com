import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
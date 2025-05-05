import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;

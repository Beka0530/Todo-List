import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearchChange }) => {
  return (
    <input
        onChange={(event) => onSearchChange(event.target.value.toLowerCase())}
        type="text"
        className="form-control search-input"
        placeholder="type to search" />
  );
};

export default SearchPanel;

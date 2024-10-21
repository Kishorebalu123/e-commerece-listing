import React, { useState } from 'react';
import './index.css';

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);  // Pass the search text to the parent component
  };

  return (
    <header className="header">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Products..."
        value={searchText}
        onChange={handleSearch}
      />
      <div className="icons">
        <span className="icon">Profile</span>
        <span className="icon">Cart</span>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Search = ({ search, ref, handleSearch }) => {
  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search a character" />
    </div>
  );
};

export default Search;
import React from 'react';

const Search = ({ search, inputRef, handleSearch }) => {
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search a character" />
    </div>
  );
};

export default Search;
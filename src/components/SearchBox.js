import React from "react";

const SearchBox = ({ searchChange}) => {
  return (
    <>
      <input type="search" name="search" id="searching" placeholder="search robots" onChange={searchChange} />

    </>
  );
};

export default SearchBox;

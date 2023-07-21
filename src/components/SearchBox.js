import React from "react";

const SearchBox = ({ searchChange}) => {
  return (
    <>
      <input type="search" name="searching" id="searching" placeholder="search robots" onChange={searchChange} />
    </>
  );
};

export default SearchBox;

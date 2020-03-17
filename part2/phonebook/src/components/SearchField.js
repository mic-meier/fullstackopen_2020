import React from "react";

const SearchField = props => {
  return (
    <div>
      Search:{" "}
      <input value={props.searchName} onChange={props.handleSearchNameChange} />
    </div>
  );
};

export default SearchField;

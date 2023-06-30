import React from "react";

/**
 * Parent
 *      Containers / App
 *
 * Child
 *
 */

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2 mb4">
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue mb3"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;

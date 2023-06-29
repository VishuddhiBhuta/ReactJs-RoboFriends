import React from "react";

/**
 * Parent
 *      Containers / App
 *
 * Child
 *      No Child
 */

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 mb4">
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue mb3"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

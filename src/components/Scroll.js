import React from "react";

/**
 *
 * Parent
 *      App
 *
 * Child
 *      No-Child
 *
 * Functionality: Allow to scroll the content inside this component and render the children inside it.
 */

const name = (props) => {
  return <div>{props.children}</div>;

  /** Inline style can be given as below
   * it is slight different than normal CSS
   */

  //   return (
  //     <div style={{ overflowY: "scroll", height: "800px" }}>{props.children}</div>
  //   );
};

export default name;

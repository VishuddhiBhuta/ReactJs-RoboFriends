import React from "react";

import Card from "./Card";

/**
 * Parent
 *      Containers / App
 *
 * Child
 *      Card
 */

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id + i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      ></Card>
    );
  });
  return <div className="card-wrapper">{cardsArray}</div>;
};

export default CardList;

import React from "react";
import Card from "./Card";

/* props:{
  "robots": [
    "{email: \"johndoe@example.com\", id: 1, name: \"John D…}",
    "{email: \"janesmith@example.com\", id: 2, name: \"Jane…}",
    "{email: \"bobjohnson@example.com\", id: 3, name: \"Bob…}",
    "{email: \"alicebrown@example.com\", id: 4, name: \"Ali…}",
    "{email: \"mikewilson@example.com\", id: 5, name: \"Mik…}",
    "{email: \"sarahdavis@example.com\", id: 6, name: \"Sar…}",
    "{email: \"tomthompson@example.com\", id: 7, name: \"To…}",
    "{email: \"emilyanderson@example.com\", id: 8, name: \"…}",
    "{email: \"davidlee@example.com\", id: 9, name: \"David…}",
    "{email: \"oliviamartinez@example.com\", id: 10, name:…}"
  ]
} */


const CardList = ({ robots }) => {
  // create for each element of the robots array a Card component (mapping data to components)
  return (
    <>
      {robots.map(user => (
        <Card
          key={user.id}
          id={user.id}
          email={user.email}
          name={user.name}
        />
      ))}

    </>
  );
};

export default CardList;

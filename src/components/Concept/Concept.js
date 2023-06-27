import React from "react";
function Concept(props) {
  console.log(props);
  return (
    <li className="concept">
      <img src={props.items.image} alt="TODO: TITLE" />
      <h2>{props.items.title}</h2>
      <p>{props.items.description}</p>
    </li>
  );
}
export default Concept;

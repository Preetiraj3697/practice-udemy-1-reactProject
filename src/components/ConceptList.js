import React from "react";
import Concept from "./Concept/Concept";

const ConceptList = (props) => {
  return (
    <ul id="concepts">
      <Concept items={props.concepts[0]} />
      <Concept items={props.concepts[1]} />
      <Concept items={props.concepts[2]} />
    </ul>
  );
};
export default ConceptList;

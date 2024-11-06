import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      {/* Conditional rendering of bio */}
      {props.bio && <p>{props.bio}</p>}

      {/* Pass github and linkedin to Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;

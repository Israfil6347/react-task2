import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section>
        <div>About</div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>founder message</li>
          <li>AboutUs</li>
          <li>code of conduct</li>
          <li>precedent message</li>
        </ul>
      </section>
    </>
  );
}

export default About;

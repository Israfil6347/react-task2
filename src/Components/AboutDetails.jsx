import React from "react";
import { useParams } from "react-router-dom";

function AboutDetails() {
  const params = useParams();
  console.log(params.aboutDetail);
  return (
    <>
      <section>
        <div>A</div>
        <p>{params.aboutDetail}</p>
      </section>
    </>
  );
}

export default AboutDetails;

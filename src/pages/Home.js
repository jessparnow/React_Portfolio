import React from "react";
import jess from "../images/jess.jpg"
import "./index.css"

function Home() {
  return (
    <div>
      <h1 className="header">About Me</h1>
      <div className="row">
      <div className="col-sm-4">
      <img src={jess} alt="A young woman smiling and siting next to a plant" width="280px" className="rounded-lg" />
        </div>
      <div className="col-sm-6">
    

        <p className="about">
          I'm Jess. I'm currently working as a team lead at the soon to be
          renamed Firefly Computers. I've worked in various fields since
          graduating from the University of Minnesota Duluth with a major in
          Graphic Design.{" "}
        </p>

        <p className="about">
          My customer service experience means I'm great working with other
          people. I'm great working on an individual basis as well. I'm
          enthusiastic and ready to learn especially when it comes to coding. My
          favorite hobbies include photography and sewing. They keep me creating
          new things.
        </p>
        </div>
      </div>
    </div>
  );
}
export default Home;

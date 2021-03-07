import React from "react";
import jess from "../images/jess.jpg"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div class="col-sm-3">
      <img src={jess} alt="A young woman smiling and siting next to a plant" width="280px" id="profileImg" />
        </div>
      <div className="col-sm-7">
        <h2 id="aboutMeHeader">About Me</h2>

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
  );
}
export default Home;

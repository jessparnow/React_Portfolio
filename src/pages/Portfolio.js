import React, { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import projects from "../portfolio.json";

function Portfolio() {
  let developerState = useState({
    name: projects.name,
    image: projects.image,
    description: projects.description,
    github: projects.github,
    app_page: projects.app_page,
  });
  console.log(developerState);
  return (
    <div>
      {developerState.map(() => (
      <ProjectsCard
        
          projects={projects}
        
      />
      ))}
    </div>
  );
}
export default Portfolio;

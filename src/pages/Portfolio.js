import React, { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import projects from "../portfolio.json";

function Portfolio() {
  let developerState = useState({
   projects
  });
  //console.log(developerState);
  return (
    <div>
      {developerState.map(() => (
      <ProjectsCard
        
          name={projects.name}
          image={projects.image}
          description={projects.description}
          github={projects.github}
          app_page={projects.app_page}
        
      />
      ))}
    </div>
  );
}
export default Portfolio;

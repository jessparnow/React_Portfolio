import React from "react";
import projects from "../portfolio.json";

function ProjectsCard() {
  let developerState = projects;
  console.log(developerState)
  return (
    
    <div className="card">
      <img
        src={developerState.image}
        className="card-img-top"
        alt="..."
        style={{ width: "18rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{developerState.name}</h5>
        <p className="card-text">{developerState.description}</p>
        <a href={developerState.github} className="btn btn-primary">
          GitHub
        </a>
        <a href={developerState.app_page} className="btn btn-primary">
          App Page
        </a>
      </div>
    </div>
    
  );
}
export default ProjectsCard;

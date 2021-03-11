import React from "react";

function ProjectsCard(props) {
 
 console.log(props);
  return (
    
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={{ width: "18rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.github} className="btn btn-primary">
          GitHub
        </a>
        <a href={props.app_page} className="btn btn-primary">
          App Page
        </a>
      </div>
    </div>
    
  );
}
export default ProjectsCard;

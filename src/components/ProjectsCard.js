import React from "react";
import "./index.css"

function ProjectsCard(props) {
 
 console.log(props);
  return (
    
    <div className="card mb-3 transparent" style={{ width: "540px;" }}>
      <div className="row g-0">
      <div className="col-sm-4">
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={{ width: "20rem" }}
      />
      </div>
      <div className="col-sm-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.github} className="btn btn-outline-info">
          GitHub
        </a>
        <a href={props.app_page} className="btn btn-outline-info font-black">
          App Page
        </a>
        </div>
      </div>
    </div>
  </div>
    
  );
}
export default ProjectsCard;

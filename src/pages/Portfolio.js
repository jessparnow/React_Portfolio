import React, {useState} from "react";
import projects from "../portfolio.json"

function Portfolio () {
    const [developerState] = useState({
        projects
      });
    return (
       
   
<div className="card">
  <img src={developerState.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{developerState.name}</h5>
    <p className="card-text">{developerState.description}</p>
    <a href={developerState.github} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}
export default Portfolio;
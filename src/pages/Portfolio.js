import React, {useState} from "react";
import projects from "../portfolio.json"
import workout from "../images/workouttracker.png"

function Portfolio () {
    // let projects = props.projects;

    const [developerState] = useState({
        projects,
        name: "Workout Tracker",
        description: "App to keep track of daily workouts and data over time.",
        github: "https://github.com/jessparnow/WorkoutTracker",
        app_page: "https://limitless-bastion-88861.herokuapp.com/?id=60208d34225a5100153538c1"
      });
    return (
       
   
<div className="card">
  <img src={workout} className="card-img-top" alt="..." style={{width:"18rem"}} />
  <div className="card-body">
    <h5 className="card-title">{developerState.name}</h5>
    <p className="card-text">{developerState.description}</p>
    <a href={developerState.github} className="btn btn-primary">GitHub</a>
    <a href={developerState.app_page} className="btn btn-primary">App Page</a>
  </div>
</div>
    )
}
export default Portfolio;
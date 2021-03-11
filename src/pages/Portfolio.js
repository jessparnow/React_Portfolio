import React, { Component } from "react";
import ProjectsCard from "../components/ProjectsCard";
import projects from "../portfolio.json";

class Portfolio extends Component {
  state = {
    projects,
  };
  render() {
    
    return (
      <div className="container">
      
        {this.state.projects.map((projects) => (
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
}
export default Portfolio;

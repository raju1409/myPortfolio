import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Technologies used :</b> {project.skills}
      </p>
      <h2 >
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon /> SourceCode
        </a>
      </h2>
      {project.visit && (
        <h2 >
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            
          >
            Checkout here
          </a>
        </h2>
      )}
    </div>
  );
}

export default ProjectDisplay;

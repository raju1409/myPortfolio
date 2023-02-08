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
      <h1 style={{ fontSize: "50px" }}>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#21325e" }}
        >
          <GitHubIcon /> SourceCode
        </a>
      </h1>
      {project.visit && (
        <h1 style={{ fontSize: "50px" }}>
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#21325e" }}
          >
            Visit
          </a>
        </h1>
      )}
    </div>
  );
}

export default ProjectDisplay;

import React from "react";
import "../style/project-cards.scss";

function projectCard(project) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {SeeMoreButton(project.url)}
    </div>
  );
}

function SeeMoreButton(url) {
  return (
    <div>
      <a href={url}>
        <div className="project-card-button">more</div>
      </a>
      <div className="project-card-button-behind">underneath</div>
    </div>
  );
}

function TechnologyImage(technology) {
  return (
    <img
      src={require({ technology })}
      alt="a cool pic of me"
      className="technology-picture"
    ></img>
  );
}

export default projectCard;

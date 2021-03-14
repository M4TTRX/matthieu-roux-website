import React from "react";

import Button from "../button/button";
import "./portfolioItem.scss";

function PortfolioItem(project, theme) {
  var description = [];
  for (let paragraph of project.description) {
    description.push(<p>{paragraph}</p>);
  }
  return (
    <div className="project-card">
      <div className="flex-row">
        <div className="porfolio-item-description">
          <h2>{project.title}</h2>
          {description}
          {Button("View Code", project.url)}
        </div>
        <div className="portfolio-image-container">{image("spotme")}</div>
      </div>
    </div>
  );
}

function image(imgName) {
  console.log(imgName);
  let img = require("../../resources/img/portfolio/" + imgName + ".jpg");
  return (
    <img
      src={img}
      className="technology-picture"
      alt="protfolio-img"
      className="porfolioImg"
    ></img>
  );
}

export default PortfolioItem;

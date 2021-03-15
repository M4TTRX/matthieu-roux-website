import React from "react";

import Button from "../button/button";
import "./portfolioItem.scss";

function PortfolioItem(project, theme) {
  var description = [];
  for (let paragraph of project.description) {
    description.push(<p>{paragraph}</p>);
  }
  let img = <div></div>;
  if (project.imgName !== undefined) {
    img = (
      <div className="portfolio-image-container">{image(project.imgName)}</div>
    );
  }
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <div className="flex-row">
        {img}
        <div className="porfolio-item-description">
          {description}
          {Button("View Code", project.url)}
        </div>
      </div>
    </div>
  );
}

function image(imgName) {
  console.log(imgName);
  let img = require("../../resources/img/portfolio/" + imgName + ".jpg");
  return <img src={img} alt="protfolio-img" className="porfolioImg"></img>;
}

export default PortfolioItem;

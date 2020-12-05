import React from "react";
import "./button.scss";

function Button(content, url) {
  return (
    <div>
      <a href={url}>
        <div className="project-card-button">{content}</div>
      </a>
    </div>
  );
}

export default Button;

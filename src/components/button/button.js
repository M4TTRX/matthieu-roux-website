import React from "react";
import "./button.scss";

function Button(content, url) {
  return (
    <div>
      <a href={url}>
        <div
          className="project-card-button"
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </div>
      </a>
    </div>
  );
}

export default Button;

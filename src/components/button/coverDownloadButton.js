import React from "react";
import "./button.scss";

function CoverDownloadButton(content, url) {
  return (
    <div>
      <a href={url} download>
        <div className="project-card-cover-button">{content}</div>
      </a>
    </div>
  );
}

export default CoverDownloadButton;

import React from "react";

function CoverButton(content, url, theme) {
  return (
    <div>
      <a href={url}>
        <div
          className="project-card-cover-button"
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </div>
      </a>
    </div>
  );
}

export default CoverButton;

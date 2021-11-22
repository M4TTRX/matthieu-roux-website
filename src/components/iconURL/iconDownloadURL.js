import React from "react";
import "./iconURL.scss";

function IconDownloadURL(content, url, icon) {
  return (
    <a href={url} className="icon-url" download>
      <div target="_blank" rel="noreferrer noopener">
        <img
          src={require("../../resources/icons/" + icon + ".svg").default}
          alt="Globe"
          height="45px"
          width="45px"
          className="icon"
        />
        {content}
      </div>
    </a>
  );
}

export default IconDownloadURL;

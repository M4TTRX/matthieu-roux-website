import React from "react";
import "./iconURL.scss";

function IconURL(content, url, icon) {
  return (
    <a href={url} className="icon-url">
      <div target="_blank" rel="noreferrer noopener">
        <img
          src={require("../../resources/icons/" + icon + ".svg").default}
          alt="Globe"
          height="45px"
          width="45px"
        />
        {content}
      </div>
    </a>
  );
}

export default IconURL;

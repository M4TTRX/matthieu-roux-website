import React from "react";
import "./coverPicture.scss";

function CoverPicture() {
  return (
    <div className="image-container">
      <img
        src={require("../../resources/img/matthieu-roux-profile.webp")}
        alt="a cool pic of me"
        className="coverPhoto"
      ></img>
    </div>
  );
}

export default CoverPicture;

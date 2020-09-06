import React from "react";

function CoverPicture() {
  return (
    <img
      src={require("../resources/matthieu-roux-profile.webp")}
      alt="a cool pic of me"
      className="coverPhoto"
    ></img>
  );
}

export default CoverPicture;

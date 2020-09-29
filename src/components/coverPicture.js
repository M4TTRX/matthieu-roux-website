import React from "react";

function coverPicture() {
  return (
    <img
      src={require("../resources/matthieu-roux-profile.webp")}
      alt="a cool pic of me"
      className="coverPhoto"
    ></img>
  );
}

export default coverPicture;

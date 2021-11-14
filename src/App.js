import React from "react";
import "./App.scss";
import DownloadButton from "./components/button/downloadButton";
import CoverDownloadButton from "./components/button/coverDownloadButton";
import CoverButton from "./components/button/coverButton";
import { Text, Div } from "atomize";

function App() {
  // Import languages
  const en = require("./resources/lang/en.json");

  // Set the content based on the proper language
  var content = en;

  const bannerSection = createBannerSection(content.bannerSection);

  return (
    <div className="App">
      {bannerSection}
      <div className="content"></div>
    </div>
  );
}

function createBannerSection(content) {
  return (
    <Div>
      <Div className="content">
        <Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
          Matthieu Roux
        </Text>
        <Div d="flex">
          {CoverDownloadButton(
            content.resumeButton.label,
            process.env.PUBLIC_URL + content.resumeButton.url
          )}
          {CoverButton(
            content.linkedInButton.label,
            content.linkedInButton.url
          )}
          {CoverButton(content.emailButton.label, content.emailButton.url)}
          {CoverButton(content.githubButton.label, content.githubButton.url)}
        </Div>
      </Div>
    </Div>
  );
}

function createAboutMe(content) {
  return (
    <div className="padded-div">
      <h1 className="h1">{content.h1}</h1>
      <p>{content.body}</p>
    </div>
  );
}

function createResumeSection(content) {
  return (
    <div className="padded-div">
      <h1 className="h1">{content.h1}</h1>
      <p>{content.body}</p>
      {DownloadButton(
        content.button.label,
        process.env.PUBLIC_URL + content.button.url
      )}
    </div>
  );
}
export default App;

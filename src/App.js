import React, { useState } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import CoverPicture from "./components/coverPicture/coverPicture";
import PortfolioItem from "./components/portfolioItem/portfolioItem";
import DownloadButton from "./components/button/downloadButton";
import CoverDownloadButton from "./components/button/coverDownloadButton";
import CoverButton from "./components/button/coverButton";
import { GlobalStyles } from "./resources/theme/global";
import { lightTheme, darkTheme } from "./resources/theme/theme";
import ThemeToggleIcon from "./resources/icons/themeToggleIcon";
import IconURL from "./components/iconURL/iconURL";

function App() {
  var userPreferredTheme = "light";
  var userPreferredLanguage = "English";

  // Set the default theme based on the user's system theme
  // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //   userPreferredTheme = "dark";
  // }

  // Import languages
  const en = require("./resources/lang/en.json");

  var userPreferences = {
    theme: userPreferredTheme,
    language: userPreferredLanguage,
  };
  // User Preferences
  const [preferences, setPreferences] = useState(userPreferences);

  // Set the content based on the proper language
  var content = en;

  // Function that updates preferences
  const togglePreferences = () => {
    // Toggle
    if (preferences.theme === "light") {
      setPreferences({ theme: "dark", language: preferences.language });
      // otherwise, it should be light
    } else {
      setPreferences({ theme: "dark", language: preferences.language });
    }
  };

  const bannerSection = createBannerSection(
    content.bannerSection,
    preferences.theme,
    togglePreferences
  );
  const aboutMeSection = createAboutMe(content.aboutMeSection);
  const myProjectsSection = createMyProjectsSection(
    content.myProjectsSection,
    preferences.theme
  );
  const myResumeSection = createResumeSection(content.resumeSection);
  return (
    <div className="App">
      <ThemeProvider
        theme={preferences.theme === "light" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyles />

          {bannerSection}
          <div className="content"></div>
        </>
      </ThemeProvider>
    </div>
  );
}

function createBannerSection(content, theme, togglePreferences) {
  const toggle = ThemeToggleIcon(theme);
  return (
    <div>
      <div className="top-bar"></div>

      <div className="content">
        <div className="title-section">
          <header className="title">
            Matthieu <br /> Roux{" "}
          </header>
          <div className="cover-button-row">
            {CoverDownloadButton(
              content.resumeButton.label,
              process.env.PUBLIC_URL + content.resumeButton.url
            )}
            {IconURL(
              content.linkedInButton.label,
              content.linkedInButton.url,
              "linkedin"
            )}
            {IconURL(
              content.emailButton.label,
              content.emailButton.url,
              "mail"
            )}
            {IconURL(
              content.githubButton.label,
              content.githubButton.url,
              "github"
            )}
          </div>
        </div>
      </div>
    </div>
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

function createMyProjectsSection(content, theme) {
  var projects = [];
  for (let project of content.projects) {
    projects.push(PortfolioItem(project, theme));
  }
  return (
    <div className="padded-div">
      <h1 className="h1">{content.h1}</h1>
      {projects}
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

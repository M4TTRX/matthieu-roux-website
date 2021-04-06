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

function App() {
  var userPreferredTheme = "light";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    userPreferredTheme = "dark";
  }

  const [theme, setTheme] = useState(userPreferredTheme);

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  const bannerSection = createBannerSection(theme, toggleTheme);
  const aboutMeSection = createAboutMe();
  const myProjectsSection = createMyProjectsSection(theme);
  const myResumeSection = createResumeSection();
  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />

          {bannerSection}
          <div className="content">
            {aboutMeSection}
            {myProjectsSection}
            {myResumeSection}
          </div>
        </>
      </ThemeProvider>
    </div>
  );
}

function createBannerSection(theme, toggleTheme) {
  const toggle = ThemeToggleIcon(theme);
  return (
    <div>
      <div className="top-bar">
        <div className="theme-toggle" onClick={toggleTheme}>
          Use {theme === "light" ? "Dark" : "Light"} mode{toggle}
        </div>
      </div>
      <div className="banner-wrapper">{CoverPicture()}</div>
      <div className="content">
        <div className="title-section">
          <header className="title">
            Matthieu <br /> Roux{" "}
          </header>
          <div className="cover-button-row">
            {CoverDownloadButton(
              "Resume",
              process.env.PUBLIC_URL + "/resume/resume-en.pdf"
            )}
            {CoverButton(
              "LinkedIn",
              "https://www.linkedin.com/in/matthieu-roux-317878153/"
            )}
            {CoverButton("Email", "mailto:matthieurouxleoncini@gmail.com")}
            {CoverButton("Github", "https://github.com/M4TTRX")}
          </div>
        </div>
      </div>
    </div>
  );
}

function createAboutMe() {
  return (
    <div className="padded-div">
      <h1 className="h1">About Me</h1>
      <p>
        I am a 21 year old student at Queen's University who's about to finish
        his degree in Computer Engineering. I was born in Reunion Island, a
        French Territory in the Indian Ocean, and my father's work has pushed
        our family to move to Romania, Poland and then Canada. This lifestyle
        taught me to adapt quickly to unknown environments where sometimes I do
        not even know the local language.
      </p>
    </div>
  );
}

function createMyProjectsSection(theme) {
  const studyQProject = {
    title: "StudyQ",
    description: [
      "StudyQ was an app that allowed the creation of virtual Qcards by scanning MCQ exams. It also allowed users to share their Qcard sets and compete with their friends",
    ],
    url: "https://github.com/M4TTRX/studyq",
    imgName: "studyQ",
  };
  const spotMeProject = {
    title: "Spotme",
    description: [
      `Spotme is the social way to track your daily workout. 
      The idea came to me when I was unhappy with the time my friend 
      took to write down his progress when weight lifting with him: it 
      was slow and he could not easily track his progress.`,
      `After learning he wasn't the only person using notebooks and 
      being unsatisfied with the existing apps that could help them 
      track their progress, I decided to take the matter in my own 
      hands and make my own fitness application, made for people who 
      like to lift weights and keep track of their progress.`,
      `The app is still work in progress, but you can check out 
      its github repository.`,
    ],
    url: "https://github.com/M4TTRX/spotme",
    imgName: "spotme",
  };
  const readingGlassesProject = {
    title: "Reading Glasses",
    description: [
      ` Reading glasses (working title) is a pair of glasses that helps the
      visually impaired read. On the press of a button, the glasses will say
      out loud the text that is presented in front of them.`,
      `All the processing is done on the glasses, without the need of a phone, 
      more information on their functioning coming soon, but for now you can always 
      check out the repository.`,
    ],
    imgName: "reading-glasses",
    url: "https://github.com/M4TTRX/reading-glasses",
  };
  return (
    <div className="padded-div">
      <h1 className="h1">Portfolio</h1>
      {PortfolioItem(spotMeProject, theme)}
      {PortfolioItem(readingGlassesProject, theme)}
      {PortfolioItem(studyQProject, theme)}
    </div>
  );
}

function createResumeSection() {
  return (
    <div className="padded-div">
      <h1 className="h1">Resume</h1>
      <p>
        Want to know more about my education and work experience? Check out my
        resume below!
      </p>
      {DownloadButton(
        "Resume",
        process.env.PUBLIC_URL + "/resume/resume-en.pdf"
      )}
    </div>
  );
}
export default App;

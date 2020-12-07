import React, { useState } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import CoverPicture from "./components/coverPicture/coverPicture";
import Button from "./components/button/button";
import DownloadButton from "./components/button/downloadButton";
import { GlobalStyles } from "./resources/theme/global";
import { lightTheme, darkTheme } from "./resources/theme/theme";

function App() {
  const [theme, setTheme] = useState("light");

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

  const bannerSection = createBannerSection();
  const aboutMeSection = createAboutMe();
  const myProjectsSection = createMyProjectsSection();
  const myResumeSection = createResumeSection();
  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <button onClick={toggleTheme}>Toggle theme</button>
          {bannerSection}
          {aboutMeSection}
          {myProjectsSection}
          {myResumeSection}
        </>
      </ThemeProvider>
    </div>
  );
}

function createBannerSection() {
  return (
    <div className="banner-wrapper">
      {CoverPicture()}
      <div className="padded-div">
        <header className="title">
          Matthieu <br /> Roux{" "}
        </header>
        <div className="flex-row">
          {Button(
            "LinkedIn",
            "https://www.linkedin.com/in/matthieu-roux-317878153/"
          )}
          {Button("Github", "https://github.com/M4TTRX")}
          {Button("Email", "mailto:matthieurouxleoncini@gmail.com")}
          {DownloadButton(
            "Resume PDF",
            process.env.PUBLIC_URL + "/resume/resume-en.pdf"
          )}
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

function createMyProjectsSection() {
  return (
    <div className="padded-div">
      <h1 className="h1">Portfolio</h1>
      <h2> Spotme</h2>
      <p>
        Spotme is the social way to track your daily workout. The idea came to
        me when I was unhappy with the time my friend took to write down his
        progress when weight lifting with him: it was slow and he could not
        easily track his progress.
      </p>
      <p>
        After learning he wasn't the only person using notebooks and being
        unsatisfied with the existing apps that could help them track their
        progress, I decided to take the matter in my own hands and make my own
        fitness application, made for people who like to lift weights and keep
        track of their progress.
      </p>
      <p>
        The app is still work in progress, but you can check out its github
        repository.
      </p>
      {Button("Github Repository", "https://github.com/M4TTRX/spotme")}
      <h2> Reading Glasses</h2>
      <p>
        Reading glasses (working title) is a pair of glasses that helps the
        visually impaired read. On the press of a button, the glasses will say
        out loud the text that is presented in front of them.
      </p>
      <p>
        This is my capstone project therefore I cannot share its repository here
        yet as it would be a violation of academic integrity.
      </p>
      <h2>StudyQ</h2>
      <p>
        StudyQ is an app that helped students study more efficiently by
        generating a set of virtual Qcards when scanning and exam with multiple
        choice questions. It also allows users to share their Qcard sets and
        compete with their friends introducing a fun aspect to studying.
      </p>
      {Button("Github Repository", "https://github.com/M4TTRX/studyq")}
    </div>
  );
}

function createResumeSection() {
  return (
    <div className="padded-div">
      <h1 className="h1">Resume</h1>
      <p>
        Want to know more about my education adn work experience? Check out my
        resume below!
      </p>
      {DownloadButton(
        "Resume PDF",
        process.env.PUBLIC_URL + "/resume/resume-en.pdf"
      )}
    </div>
  );
}
export default App;

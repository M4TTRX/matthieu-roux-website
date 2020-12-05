import React from "react";
import "./App.scss";
import CoverPicture from "./components/coverPicture";

function App() {
  const aboutMeSection = createAboutMe();
  const myProjectsSection = createMyProjectsSection();
  const myResumeSection = createResumeSection();
  return (
    <div className="App">
      <div>
        <header className="title">
          Matthieu <br /> Roux{" "}
        </header>
      </div>
      {aboutMeSection}
      {myProjectsSection}
    </div>
  );
}

function createAboutMe() {
  return (
    <div>
      <h1 className="h1">About Me</h1>
      <p>
        I am a 21 year old student at Queen's University who's about to finish
        his degree in Computer Engineering. I was born in Reunion Island, a
        French remote department in the Indian Ocean, my father's work ahs
        pushed our family to move to Romania, then Poland and finally to Canada.
        This lifestyle taught me to adapt quickly to unknown environment where
        sometimes I do not even know the local language.
      </p>
      <p>
        -{" "}
        <a href="mailto:matthieurouxleoncini@gmail.com" className="url">
          Email
        </a>
        <br />-{" "}
        <a href="https://github.com/M4TTRX" className="url">
          Github
        </a>
        <br />-{" "}
        <a
          href="https://www.linkedin.com/in/matthieu-roux-317878153/"
          className="url"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

function createMyProjectsSection() {
  return (
    <div>
      <h1 className="h1">Portfolio</h1>
      <h2> Fitly</h2>
      <p>
        Fitly is the social way to track your daily workout. The idea came to me
        when I was unhappy with the time my friend took to write down his
        progress when weight lifting with him: it was slow and he could not
        easily track his progress.
      </p>
      <p>
        After out he wasn't the only person using notebooks and being
        unsatisfied with the existing apps that could help them track their
        progress, I decided to take the matter in my own hands and make my own
        fitness application, made for people who like to lift weights and keep
        track of their progress.
      </p>
      <p>
        The app is still work in progress, but you can check out its github
        repository.
      </p>
      <a href="https://github.com/M4TTRX/fitly" className="url">
        Github Repository
      </a>
      <h2> Reading Glasses</h2>
      <p>
        Reading glasses (development name) is pair of glasses that helps the
        visually impaired read. Upon the press of a button, the glasses will
        read the text that is presented in front of them.
      </p>
      <p>
        Because this project is my capstone project, I cannot share its
        repository here yet as it would be a violation of academic integrity.
      </p>
      <h2>StudyQ</h2>
      <p>
        StudyQ is an app that helped students study more efficiently by
        generating a set of virtual Qcards when scanning and exam with multiple
        choice questions. It also allowed users to share their Qcard sets and
        compete with their friends and bring a fun aspect to studying.
      </p>
      <a href="https://github.com/M4TTRX/studyq" className="url">
        Github Repository
      </a>
    </div>
  );
}

function createResumeSection() {
  return (
    <div>
      <header className="h1">Resume</header>
      <p>
        Want to know more about my education and work experience? Take a look at
        my resume!
      </p>
    </div>
  );
}
export default App;

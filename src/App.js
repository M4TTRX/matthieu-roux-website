import React from "react";
import "./style/App.scss";
import coverPicture from "./components/coverPicture";
import projectCard from "./components/projectCard";

function App() {
  const contactMeSection = creatContactMeSection();
  const myProjectsSection = createMyProjectsSection();
  return (
    <div className="App">
      <div>
        <div className="flexRow">
          <div className="flexColumn">
            <header className="title">Hi, I'm Matthieu</header>
            <div className="underline-title"> </div>
            <p className="limited-width">
              Hi my name is Matthieu Roux, and thanks for taking the time to
              visit my website! This place is still in construction so I will
              keep adding more things to it. In the meantime, you can find my
              contact info
            </p>
          </div>
          <div className="image-container">
            {coverPicture()}
            <div className="yellow-cover-decoration"></div>
            <div className="black-cover-decoration"></div>
          </div>
        </div>
      </div>
      {myProjectsSection}
      {contactMeSection}
    </div>
  );
}

function creatContactMeSection() {
  return (
    <div>
      {createHeader1("Contact Info")}
      <p>
        - Email:{" "}
        <a href="mailto:matthieurouxleoncini@gmail.com" className="url">
          matthieurouxleoncini@gmail.com
        </a>
        <br />- Github:{" "}
        <a href="https://github.com/M4TTRX" className="url">
          https://github.com/M4TTRX
        </a>
        <br />- LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/matthieu-roux-317878153/"
          className="url"
        >
          https://www.linkedin.com/in/matthieu-roux-317878153/
        </a>
      </p>
    </div>
  );
}

function createMyProjectsSection() {
  const studyQProject = {
    title: "StudyQ",
    description:
      "StudyQ was an app that allowed the creation of virtual Qcards by scanning MCQ exams. It also allowed users to share their Qcard sets and compete with their friends",
    url: "https://github.com/M4TTRX/studyq",
  };
  return (
    <div>
      {createHeader1("My Projects")}
      <p>
        Wonder what I can make? Here's a list of some of the work I have made
        both for a class and during my free time.
        <br />
        Work in progress, coming soon.
      </p>
      {projectCard(studyQProject)}
    </div>
  );
}

function createHeader1(header) {
  return (
    <div>
      <header className="h1">{header}</header>
      <div className="underline-h1"></div>
    </div>
  );
}
export default App;

import React from "react";
import "./App.scss";
import CoverPicture from "./components/coverPicture";

function App() {
  const contactMeSection = creatContactMeSection();
  const myProjectsSection = createMyProjectsSection();
  return (
    <div className="App">
      <div>
        <header className="title">Hi, I'm Matthieu</header>
        <div className="underline-title"> </div>
        <div className="flexRow">
          <p className="limited-width">
            Hi my name is Matthieu Roux, and thanks for taking the time to visit
            my website! This place is still in construction so I will keep
            adding more things to it. In the meantime, you can find my contact
            info
          </p>
          <div className="image-container">
            {CoverPicture()}
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
  return (
    <div>
      {createHeader1("My Projects")}
      <p>
        Wonder what I can make? Here's a list of some of the work I have made
        both for a class and during my free time.
        <br />
        Work in progress, coming soon.
      </p>
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

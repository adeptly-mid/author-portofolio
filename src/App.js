import React from "react";
import "./App.css"; // Ensure you add styles for the navigation bar

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1 className="logo">ARTI RAI</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#books">BOOKS</a>
            </li>
            <li>
              <a href="#newsletter">NEWSLETTER</a>
            </li>
            <li>
              <a href="#speaking">SPEAKING</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#facebook">
            <img
              src={require("./images/fb.jpg")}
              className="icons"
              alt="facebook"
            />
          </a>
          <a href="#instagram">
            <img
              src={require("./images/insta.png")}
              className="icons"
              alt="instagram"
            />
          </a>
        </div>{" "}
      </header>
    </div>
  );
}

export default App;

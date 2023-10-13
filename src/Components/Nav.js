import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import logo from "../Images/SarcLogo.png";

function Header() {
  const [theme, setTheme] = useState("header");

  function onTheme() {
    if (theme === "header") {
      setTheme("header light");
      document.body.classList.add("light");
    } else {
      setTheme("header");
      document.body.classList.remove("light");
    }
  }

  return (
    <>
      <header className={theme}>
        <div className="container" data-aos="fade-up" data-aos-duration="700">
          <nav className="nav">
            <div className="nav-left">
              <div className="nav__logo">
                <a href="/">
                  <img src={logo} alt="Sarc" />
                </a>
              </div>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/projects">projects</a>
                </li>
                <li className="nav__item">
                  <a href="/contact">contact</a>
                </li>
              </ul>
            </div>
            <i
              className="bx bxs-adjust theme__toggle"
              onClick={onTheme}
              id="theme-button"
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

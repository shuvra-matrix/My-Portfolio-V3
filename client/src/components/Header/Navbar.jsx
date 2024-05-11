import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import {
  aboutLogo,
  contactLogo,
  experienceLogo,
  logo,
  projectLogo,
  skillLogo,
} from "../../assets/index.js";
import { useNavigate } from "react-router-dom";
import githubIcon from "../../assets/logo/github.png";
import menuSvg from "../../assets/logo/menu.svg";
import closeSvg from "../../assets/logo/close.svg";
import { MyBio } from "../../constants/index.js";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY !== 0);
      return () => (window.onscroll = null);
    };
  }, []);

  const logoDivClickHandler = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const githubIconClickHandler = () => {
    window.open(MyBio.github, "_blank");
  };

  const menuClickHandler = () => {
    setIsMenuOpen((pre) => !pre);
  };

  return (
    <>
      <nav className={styles["nav"]}>
        <div
          className={`${styles["nav-container"]} ${isScrolled ? styles["scrolled-nav"] : ""}`}
        >
          <div className={styles["logo-div"]} onClick={logoDivClickHandler}>
            <div className={styles["logo"]}>
              <img src={logo} alt="logo" />
            </div>
            <h4 className={styles["name"]}>
              {MyBio.name.slice(0, 6)} | Portfolio
            </h4>
          </div>
          <div className={styles["about-section"]}>
            <a href={"#about"}>
              <p>About</p>
            </a>
            <a href={"#skills"}>
              <p>Skill</p>
            </a>
            <a href={"#exp"}>
              <p>Experience</p>
            </a>
            <a href={"#project"}>
              <p>Projects</p>
            </a>
            <a href={"#contact"}>
              <p>Contact</p>
            </a>
          </div>
          <div className={styles["event-section"]}>
            <div className={styles["github"]} onClick={githubIconClickHandler}>
              <div>
                <p>Github Profile</p>
              </div>
            </div>
            <div className={styles["event-img"]}>
              <img
                onClick={githubIconClickHandler}
                className={styles["git-icon"]}
                src={githubIcon}
                alt="github img"
              />
              {!isMenuOpen ? (
                <img
                  onClick={menuClickHandler}
                  className={styles["menu-icon"]}
                  src={menuSvg}
                  alt="menu"
                />
              ) : (
                <img
                  onClick={menuClickHandler}
                  className={styles["close-icon"]}
                  src={closeSvg}
                  alt="close"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${styles["nav-mobile"]} ${isMenuOpen ? styles["nav-mobile-open"] : ""}`}
      >
        <div className={styles["nav-section"]}>
          <a href={"#about"}>
            <img src={aboutLogo} alt={"about"} />
            <p>About</p>
          </a>
          <a href={"#skills"}>
            <img src={skillLogo} alt={"skills"} />
            <p>Skill</p>
          </a>
          <a href={"#exp"}>
            <img src={experienceLogo} alt={"experience"} />
            <p>Experience</p>
          </a>
          <a href={"#project"}>
            <img src={projectLogo} alt={"project"} />
            <p>Projects</p>
          </a>
          <a href={"#contact"}>
            <img src={contactLogo} alt={"contact"} />
            <p>Contact</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

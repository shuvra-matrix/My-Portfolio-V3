import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import githubIcon from "../../assets/github.png";
import menuSvg from "../../assets/menu.svg";
import closeSvg from "../../assets/close.svg";

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
    window.open("https://github.com/shuvra-matrix", "_blank");
  };

  return (
    <nav className={styles["nav"]}>
      <div
        className={`${styles["nav-container"]} ${isScrolled ? styles["scrolled-nav"] : ""}`}
      >
        <div className={styles["logo-div"]} onClick={logoDivClickHandler}>
          <div className={styles["logo"]}>
            <img src={Logo} alt="logo" />
          </div>
          <h4 className={styles["name"]}>Shuvra</h4>
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
          <NavLink to={"#about"}>
            <p>Projects</p>
          </NavLink>
          <NavLink to={"#about"}>
            <p>Contact</p>
          </NavLink>
        </div>
        <div className={styles["event-section"]}>
          <div className={styles["github"]} onClick={githubIconClickHandler}>
            <p>Github Profile</p>
          </div>
          <div className={styles["event-img"]}>
            <img
              onClick={githubIconClickHandler}
              className={styles["git-icon"]}
              src={githubIcon}
              alt="github img"
            />
            {!isMenuOpen ? (
              <img className={styles["menu-icon"]} src={menuSvg} alt="menu" />
            ) : (
              <img
                className={styles["close-icon"]}
                src={closeSvg}
                alt="close"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

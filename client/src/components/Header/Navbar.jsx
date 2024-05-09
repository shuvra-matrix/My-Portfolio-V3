import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY !== 0);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <nav className={styles["nav"]}>
      <div
        className={`${styles["nav-container"]} ${isScrolled ? styles["scrolled-nav"] : ""}`}
      >
        <div className={styles["logo-div"]}>
          <div className={styles["logo"]}>
            <img src={Logo} alt="logo" />
          </div>
          <h4 className={styles["name"]}>Shuvra</h4>
        </div>
        <div className={styles["about-section"]}>
          <a href={"#about"}>
            <p>About</p>
          </a>
          <NavLink to={"#about"}>
            <p>Skill</p>
          </NavLink>
          <NavLink to={"#about"}>
            <p>Experience</p>
          </NavLink>
          <NavLink to={"#about"}>
            <p>Projects</p>
          </NavLink>
          <NavLink to={"#about"}>
            <p>Contact</p>
          </NavLink>
        </div>
        <div className={styles["github-section"]}>
          <div className={styles["github"]}>
            <p>Github Profile</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

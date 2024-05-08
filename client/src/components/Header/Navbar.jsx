import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-container"]}>
        <div className={styles["logo-div"]}>
          <div className={styles["logo"]}>
            <img src={Logo} alt="logo" />
          </div>
          <h4 className={styles["name"]}>Shuvra</h4>
        </div>
        <div className={styles["about-section"]}>
          <NavLink to={"#about"}>
            <p>About</p>
          </NavLink>
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

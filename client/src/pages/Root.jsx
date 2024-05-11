import Navbar from "../components/Header/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Projects from "../components/Works/Projects.jsx";
import Contact from "../components/Contact/Contact.jsx";
import styles from "./Root.module.css";
import React from "react";
import Skills from "../components/Skills/Skills.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Root = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["sub-container-one"]}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <div className={styles["sub-container-two"]}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

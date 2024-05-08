import Navbar from "../components/Header/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Tech from "../components/Tech/Tech.jsx";
import Works from "../components/Works/Works.jsx";
import Feedbacks from "../components/FeedBacks/Feedbacks.jsx";
import Contact from "../components/Contact/Contact.jsx";
import { StarsCanvas } from "../components/canvas/index.js";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["sub-container-one"]}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className={styles["sub-container-two"]}>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Root;

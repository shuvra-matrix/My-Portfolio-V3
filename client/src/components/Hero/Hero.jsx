import React from "react";
import styles from "./Hero.module.css";
import ScrollDown from "../UI/ScrollDown.jsx";
import { ComputersCanvas } from "../canvas/index.js";
import StyledStarsCanvas from "../canvas/BgStarts.jsx";
import { MyBio } from "../../constants/index.js";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { headContentAnimation } from "../../utils/motion.js";

const Hero = () => {
  const resumeClickHandler = () => {
    window.open(MyBio.resume, "_blank");
  };

  return (
    <section className={styles["hero-container"]}>
      <StyledStarsCanvas />
      <div className={styles["hero-container-main"]}>
        <div className={styles["hero-container-sub-one"]}>
          <div className={styles["sub-one-design"]}>
            <div className={styles["round"]}></div>
            <div className={styles["full"]}></div>
          </div>
          <div className={styles["about-section"]}>
            <h2>
              Hi, I'm <span>{MyBio.name.slice(0, 6)}</span>
            </h2>
            <h3>
              I'm a
              <span>
                <Typewriter
                  options={{
                    strings: MyBio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
            <motion.p {...headContentAnimation}>{MyBio.description}</motion.p>

            <motion.div
              onClick={resumeClickHandler}
              {...headContentAnimation}
              className={styles["resume-div"]}
            >
              <p>Check Resume</p>
            </motion.div>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <ScrollDown />
    </section>
  );
};

export default Hero;

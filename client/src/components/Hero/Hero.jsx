import React from "react";
import styles from "./Hero.module.css";
import heroBgImg from "../../assets/herobg.png";
import { ComputersCanvas } from "../canvas/index.js";

const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <img src={heroBgImg} alt="herobg" />
      <div className={styles["hero-container-main"]}>
        <div className={styles["hero-container-sub-one"]}>
          <div className={styles["sub-one-design"]}>
            <div className={styles["round"]}></div>
            <div className={styles["full"]}></div>
          </div>
          <div className={styles["about-section"]}>
            <h2>
              Hi, I'm <span>Shuvra</span>
            </h2>
            <h3>I am a Full Stack Developer</h3>
            <p>
              Pursuing B.Tech in Computer Science And Business System from
              Sister Nivedita University. I am a web Developer .I enjoy creating
              beautifully designed, intuitive and functional websites. I am also
              interested in Python Development and Cyber Security
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;

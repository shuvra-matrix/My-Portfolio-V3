import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
import React from "react";
import SkillCard from "../ServiceCard/SkillCard.jsx";
import { skills } from "../../constants/index.js";

const Skills = () => {
  return (
    <section className={styles["skills-main"]} id="skills">
      <div className={styles["skills-sub"]}>
        <motion.div
          variants={textVariant()}
          className={styles["about-heading"]}
        >
          <h2 className={styles["skills-h2"]}>Skills.</h2>
        </motion.div>
        <motion.p
          className={styles["skills-me-long"]}
          variants={fadeIn("", "", 0.1, 1)}
        >
          Here are some of my skills on which i have been working on for the
          past 3 years.
        </motion.p>
        <div className={styles["skill-card"]}>
          {skills.map((data, index) => (
            <SkillCard index={index} skills={data.skills} title={data.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

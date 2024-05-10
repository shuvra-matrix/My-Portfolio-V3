import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import React from "react";
import SkillCard from "../ServiceCard/SkillCard.jsx";
import { skills } from "../../constants/index.js";
import Card from "../UI/Card.jsx";

const Skills = () => {
  return (
    <Card
      title={"WHAT I HAVE LEARNED SO FAR"}
      overview={"Skills."}
      bgColor={"transparent"}
      id={"skills"}
    >
      <motion.p
        className={styles["skills-me-long"]}
        variants={fadeIn("", "", 0.1, 1)}
      >
        Here are some of my skills on which i have been working on for the past
        3 years.
      </motion.p>
      <div className={styles["skill-card"]}>
        {skills.map((data, index) => (
          <SkillCard
            key={index}
            index={index}
            skills={data.skills}
            title={data.title}
          />
        ))}
      </div>
    </Card>
  );
};

export default Skills;

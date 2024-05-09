import React from "react";
import styles from "./Experience.module.css";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../utils/motion.js";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../../constants/index.js";
import ExpCard from "../ServiceCard/ExpCard.jsx";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="exp"
      className={styles["experience-container"]}
    >
      <div className={styles["exp-sub"]}>
        <motion.div
          variants={textVariant()}
          className={styles["about-heading"]}
        >
          <p className={styles["intro-text"]}>WHAT I HAVE DONE SO FAR</p>
          <h2 className={styles["exp-h2"]}>Work Experience.</h2>
        </motion.div>

        <div className={styles["exp-section"]}>
          <VerticalTimeline>
            {experiences.map((data, index) => (
              <ExpCard
                key={index}
                index={index}
                title={data.title}
                skills={data.skills}
                desc={data.points}
                certiImg={data.certificate}
                company={data.company_name}
                date={data.date}
                companyIcon={data.icon}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

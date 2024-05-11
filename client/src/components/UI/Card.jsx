import { staggerContainer, textVariant } from "../../utils/motion.js";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import React from "react";

const Card = ({
  children,
  title = "INTRODUCTION",
  overview = "Overview.",
  bgColor = "#050815",
  id = "about",
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={styles["card-main"]}
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      <div className={styles["card-sub"]}>
        <motion.div variants={textVariant()} className={styles["card-heading"]}>
          <p className={styles["intro-text"]}>{title}</p>
          <h2 className={styles["card-h2"]}>{overview}</h2>
        </motion.div>

        {children}
      </div>
    </motion.section>
  );
};

export default Card;

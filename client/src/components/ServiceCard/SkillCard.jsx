import { Tilt } from "react-tilt";
import styles from "./SkillCard.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";

const SkillCard = ({ index, title, skills }) => {
  return (
    <Tilt className={styles["skill-card-main"]}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={styles["skill-card-sub"]}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={styles["skill-card"]}
        >
          <h3>{title}</h3>

          <div className={styles["skill-main"]}>
            {skills?.map((data, index) => (
              <div key={index} className={styles["skill"]}>
                <img src={data.image} alt="skill" />
                <p>{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;

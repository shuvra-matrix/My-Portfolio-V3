import styles from "./ServiceCard.module.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={styles["service-card-main"]}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={styles["service-card-sub"]}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={styles["service-card"]}
        >
          <img src={icon} alt="web-development" />

          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;

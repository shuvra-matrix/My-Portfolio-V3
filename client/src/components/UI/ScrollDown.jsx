import styles from "./ScrollDown.module.css";
import { motion } from "framer-motion";

const ScrollDown = () => {
  return (
    <div className={styles["scroll-components"]}>
      <a href={"#about"}>
        <div className={styles["scroll-sub-components"]}>
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className={styles["scroll-dot"]}
          ></motion.div>
        </div>
      </a>
    </div>
  );
};

export default ScrollDown;

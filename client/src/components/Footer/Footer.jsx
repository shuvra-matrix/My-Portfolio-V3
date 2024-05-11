import styles from "./Footer.module.css";
import { github, linkdinLogo } from "../../assets/index.js";
import { MyBio } from "../../constants/index.js";

const Footer = () => {
  return (
    <div className={styles["footer-main"]}>
      <p>&copy; 2024 {MyBio.name}</p>
      <div>
        <img src={github} alt={"github"} />
        <img src={linkdinLogo} alt={"linkdinLogo"} />
      </div>
    </div>
  );
};

export default Footer;

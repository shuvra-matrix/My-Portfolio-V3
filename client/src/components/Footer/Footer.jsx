import styles from "./Footer.module.css";
import { github, linkdinLogo } from "../../assets/index.js";
import { MyBio } from "../../constants/index.js";

const Footer = () => {
  const githubIconClickHandler = () => {
    window.open(MyBio.github, "_blank");
  };

  const linkdinLogoClickHandler = () => {
    window.open(MyBio.linkdin, "_blank");
  };

  return (
    <div className={styles["footer-main"]}>
      <p>&copy; 2024 {MyBio.name}</p>
      <div>
        <img onClick={githubIconClickHandler} src={github} alt={"github"} />
        <img
          onClick={linkdinLogoClickHandler}
          src={linkdinLogo}
          alt={"linkdinLogo"}
        />
      </div>
    </div>
  );
};

export default Footer;

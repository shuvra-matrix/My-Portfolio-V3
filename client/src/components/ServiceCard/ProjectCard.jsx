import styles from "./ProjectCard.module.css";
import { github } from "../../assets/index.js";

const ProjectCard = ({
  name,
  desc,
  tags,
  isLive,
  liveLink,
  image,
  sourceCode,
}) => {
  return (
    <div className={styles["project-card"]}>
      <img src={image} alt={"project image"} />
      <h1>{name}</h1>
      <p className={styles["desc"]}>{desc}</p>
      <div className={styles["skills"]}>
        {tags?.map((data, index) => (
          <p key={index}>#{data.name}</p>
        ))}
      </div>
      <div className={styles["links"]}>
        <img src={github} alt={"github"} />
        {isLive && (
          <div className={styles["live"]}>
            <p>Live Link</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

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
  const githubLinkHandler = () => {
    window.open(sourceCode, "_blank");
  };

  const liveLinkHandler = () => {
    window.open(liveLink, "_blank");
  };

  return (
    <div className={styles["project-card"]}>
      <img src={image} alt={"project image"} />
      <h1>{name}</h1>
      <p className={styles["desc"]}>{desc}</p>
      <div className={styles["skills"]}>
        {tags?.map((data, index) => (
          <p style={{ color: data.color }} key={index}>
            #{data.name}
          </p>
        ))}
      </div>
      <div className={styles["links"]}>
        <img onClick={githubLinkHandler} src={github} alt={"github"} />
        {isLive && (
          <div onClick={liveLinkHandler} className={styles["live"]}>
            <p>Live Link</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

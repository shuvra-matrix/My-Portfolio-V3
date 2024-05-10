import React from "react";
import Card from "../UI/Card.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import styles from "./Projects.module.css";
import { projects } from "../../constants/index.js";
import ProjectCard from "../ServiceCard/ProjectCard.jsx";

const Projects = () => {
  return (
    <Card
      id={"project"}
      bgColor={"transparent"}
      title={"WHAT I HAVE DEVELOPED SO FAR"}
      overview={"Projects."}
    >
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={styles["explain-p"]}
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className={styles["projects-section"]}>
        <div className={styles["project-nav"]}>
          <div className={styles["first-nav"]}>
            <p>ALL</p>
          </div>
          <div className={styles["snd-nav"]}>
            <p>WEB APP'S</p>
          </div>
          <div className={styles["trd-nav"]}>
            <p>OTHER'S</p>
          </div>
        </div>
        <div className={styles["projects-sub"]}>
          {projects.map((data, index) => (
            <ProjectCard
              name={data.name}
              desc={data.description}
              image={data.image}
              isLive={data.isLive}
              tags={data.tags}
              liveLink={data.liveLink}
              sourceCode={data.source_code_link}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Projects;

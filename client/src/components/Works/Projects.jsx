import { useEffect, useRef, useState } from "react";
import Card from "../UI/Card.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import styles from "./Projects.module.css";
import { projects } from "../../constants/index.js";
import ProjectCard from "../ServiceCard/ProjectCard.jsx";
import Pagination from "../Skills/Pagination.jsx";

const Projects = () => {
  const projectRef = useRef(null);
  const [paginationCondition, setPaginationCondition] = useState({
    start: 0,
    end: 6,
    totalPages: 0,
    currentPage: 1,
  });

  const [activeNav, setActiveNav] = useState("all");
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const project = projects.filter((data) => {
      return data.category.includes(activeNav);
    });
    const totalPage = Math.ceil(project.length / 6);
    setPaginationCondition((prev) => {
      return { ...prev, totalPages: totalPage };
    });

    setProjectData(project);
  }, [projects, activeNav]);

  const paginationHandler = (page) => {
    setPaginationCondition((prev) => {
      return {
        ...prev,
        start: 6 * (page - 1),
        end: 6 * page,
        currentPage: page,
      };
    });

    const sectionTop = projectRef.current.offsetTop;
    window.scroll({
      top: sectionTop - 120, // Adjusted scroll position
      behavior: "smooth",
    });
  };

  const activeNavHandler = (active) => {
    setActiveNav(active);
    setPaginationCondition((prev) => {
      return {
        ...prev,
        start: 0,
        end: 6,
        currentPage: 1,
      };
    });
  };

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

      <div className={styles["projects-section"]} ref={projectRef}>
        <div className={styles["project-nav"]}>
          <div
            className={`${styles["first-nav"]} ${activeNav === "all" ? styles["active-nav"] : ""}`}
            onClick={() => activeNavHandler("all")}
          >
            <p>ALL</p>
          </div>
          <div
            className={`${styles["snd-nav"]} ${activeNav === "web" ? styles["active-nav"] : ""}`}
            onClick={() => activeNavHandler("web")}
          >
            <p>WEB APP'S</p>
          </div>
          <div
            className={`${styles["trd-nav"]} ${activeNav === "other" ? styles["active-nav"] : ""}`}
            onClick={() => activeNavHandler("other")}
          >
            <p>OTHER'S</p>
          </div>
        </div>
        <div className={styles["projects-sub"]}>
          {projectData
            ?.slice(paginationCondition.start, paginationCondition.end)
            .map((data, index) => (
              <ProjectCard
                key={index}
                name={data.name}
                desc={data.description}
                image={data.image}
                isLive={data.isLive}
                tags={data.tags}
                liveLink={data.liveLink}
                sourceCode={data.source_code_link}
                index={index + 1}
              />
            ))}
        </div>
        <div className={styles["pagination"]}>
          {Array.from({ length: paginationCondition.totalPages }).map(
            (data, _index) => (
              <Pagination
                paginationHandel={paginationHandler}
                currnetPage={paginationCondition.currentPage}
                index={_index}
                key={_index}
              >
                {_index + 1}
              </Pagination>
            ),
          )}
        </div>
      </div>
    </Card>
  );
};

export default Projects;

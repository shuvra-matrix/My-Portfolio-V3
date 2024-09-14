import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import { backend, creator } from "../../assets/index.js";
import Card from "../UI/Card.jsx";

const serviceData = [
  { title: "Backend Developer", icon: backend },
  { title: "Frontend Developer", icon: creator },
];

const About = () => {
  return (
    <Card>
      <motion.p
        className={styles["about-me-long"]}
        variants={fadeIn("", "", 0.1, 1)}
      >
        I hold a degree in Computer Science and Business Systems from Sister
        Nivedita University. I have a passion for software development, web
        development, and a keen interest in learning new technologies and
        frameworks. As a Web Developer Intern at TCS iON, I completed two
        projects that demonstrated my skills in web development. I also gained
        experience working with the MERN Stack, Python, REST APIs, Redux, Git,
        and Docker. Currently, I work at Cloudifyapps as a Frontend Developer,
        where I focus on building responsive and user-friendly interfaces using
        React. I value user satisfaction, quality, and innovation in my work,
        and I am always eager to take on new challenges and opportunities to
        grow as both a developer and a team player. My goal is to leverage my
        skills and knowledge to create impactful, user-friendly digital
        solutions for various industries.
      </motion.p>
      <div className={styles["service-card"]}>
        {serviceData.map((data, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={data.title}
            icon={data.icon}
          />
        ))}
      </div>
    </Card>
  );
};

export default About;

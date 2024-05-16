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
        I hold a degree in Computer Science and Business Systems at Sister
        Nivedita University. I have a passion for software development, Web
        development and a keen interest in learning new technologies and
        frameworks. As a Web Developer Intern at TCS iON, I completed two
        projects that demonstrated my skills in Web Development. I also gained
        experience in working with Mern Stack, Python, REST APIs, Redux, Git and
        Docker. I am always eager to take on new challenges and opportunities to
        grow as a developer and a team player. I value user satisfaction,
        quality, and innovation in my work. My goal is to leverage my skills and
        knowledge to create impactful and user-friendly digital solutions for
        various domains and industries.
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

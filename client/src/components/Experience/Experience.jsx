import React from "react";
import styles from "./Experience.module.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../../constants/index.js";
import ExpCard from "../ServiceCard/ExpCard.jsx";
import "react-vertical-timeline-component/style.min.css";
import Card from "../UI/Card.jsx";

const Experience = () => {
  return (
    <Card
      title={"WHAT I HAVE DONE SO FAR"}
      overview={"Work Experience."}
      id={"exp"}
    >
      <div className={styles["exp-section"]}>
        <VerticalTimeline>
          {experiences.map((data, index) => (
            <ExpCard
              key={index}
              index={index}
              title={data.title}
              skills={data.skills}
              desc={data.points}
              certiImg={data.certificate}
              company={data.company_name}
              date={data.date}
              companyIcon={data.icon}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Card>
  );
};

export default Experience;

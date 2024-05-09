import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styles from "./ExpCard.module.css";

const ExpCard = ({
  index,
  skills,
  certiImg,
  date,
  title,
  desc,
  company,
  companyIcon,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "2px solid #0a2b5145",
        boxShadow: "1px 2px 10px 10px #08045a21",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(46 33 103 / 89%)" }}
      date={date}
      iconStyle={{ background: "#161133" }}
      icon={
        <div className={styles["company-icon"]}>
          <img
            src={companyIcon}
            alt={company}
            className={styles["company-icon-img"]}
          />
        </div>
      }
    >
      <div className={styles["details-section"]}>
        <div className={styles["company-details"]}>
          <img src={companyIcon} alt="company" />
          <div className={styles["company-detais-sub"]}>
            <h1>{title}</h1>
            <h4>{company}</h4>
            <h5>{date}</h5>
          </div>
        </div>
        <div className={styles["desc"]}>
          <ul>
            {desc.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
        <div className={styles["skills-main"]}>
          <p>Skills:</p>

          <div className={styles["skills"]}>
            <ul>
              {skills?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <a target="_blank" href={certiImg} className={styles["certiimage"]}>
          <img src={certiImg} alt="certiimage" />
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExpCard;

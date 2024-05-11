import styles from "./Error.module.css";
import Navbar from "../Header/Navbar.jsx";
import { useNavigate, useRouteError } from "react-router-dom";
import { MyBio } from "../../constants/index.js";
import { useEffect } from "react";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  useEffect(() => {
    if (error.status === 404) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles["error-page"]}>
      <Navbar />
      <div className={styles["error-message"]}>
        <h4>
          Something went wrong. Please reload this page. If the issue persists,
          please report it to <span>{MyBio.email}</span>.
        </h4>
      </div>
    </div>
  );
};

export default Error;

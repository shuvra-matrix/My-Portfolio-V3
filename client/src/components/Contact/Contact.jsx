import React from "react";
import Card from "../UI/Card.jsx";
import styles from "./Contact.module.css";
import { sendLogo } from "../../assets/index.js";

const Contact = () => {
  return (
    <Card id={"contact"} title={"GET IN TOUCH"} overview={"Contact."}>
      <div className={styles["contact-container"]}>
        <form>
          <div>
            <label htmlFor={"name"} className={styles["name"]}>
              Your Name
            </label>
            <input
              id={"name"}
              type={"text"}
              name={"name"}
              placeholder={"What's your name?"}
              required={true}
            />
          </div>
          <div>
            <label htmlFor={"email"} className={styles["name"]}>
              Your Email
            </label>
            <input
              id={"email"}
              type={"email"}
              name={"email"}
              placeholder={"What's your email?"}
              required={true}
            />
          </div>
          <div>
            <label htmlFor={"message"} className={styles["message"]}>
              Your Message
            </label>
            <textarea
              id={"message"}
              name={"message"}
              placeholder={"What's your message"}
              required={true}
            ></textarea>
          </div>
          <button type="submit">
            {" "}
            <img src={sendLogo} alt={"sendlogo"} /> Send
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Contact;

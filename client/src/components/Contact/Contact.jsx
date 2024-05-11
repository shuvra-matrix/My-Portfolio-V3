import React, { useEffect, useState } from "react";
import Card from "../UI/Card.jsx";
import styles from "./Contact.module.css";
import { sendLogo } from "../../assets/index.js";
import StyledStarsCanvas from "../canvas/BgStarts.jsx";
import SpaceCanvas from "../canvas/SpeaceCraft.jsx";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion.js";
import { SmallLoader } from "../Loader/Loader.jsx";
import Message from "../UI/Message..jsx";
import emailjs from "@emailjs/browser";
import { MyBio } from "../../constants/index.js";

const Contact = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInputError, setIsInputError] = useState({
    nameError: false,
    emailError: false,
    messageError: false,
  });
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const isNameValid = name.trim() !== "";
    const isEmailValid = /\S+@\S+\.\S+/.test(email); // Basic email format validation
    const isMessageValid = message.trim() !== "";

    setIsInputError((pre) => {
      return {
        ...pre,
        nameError: !isNameValid,
        emailError: !isEmailValid,
        messageError: !isMessageValid,
      };
    });

    if (isNameValid && isEmailValid && isMessageValid) {
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      setIsLoader(true);
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: name,
            to_name: MyBio.name,
            from_email: email,
            to_email: MyBio.email,
            message: message,
          },
          publicKey,
        )
        .then((response) => {
          setIsSuccess(true);
        })
        .catch((err) => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoader(false);
          setInputData((pre) => {
            return {
              ...pre,
              name: "",
              email: "",
              message: "",
            };
          });
        });
    }
  };

  const inputHandler = (e) => {
    const { name, email, message } = e.target.name;

    setInputData((pre) => {
      return { ...pre, name: name, email: email, message: message };
    });

    if (e.target.name === "name") {
      setIsInputError((pre) => {
        return { ...pre, nameError: false };
      });
    }
    if (e.target.name === "email") {
      setIsInputError((pre) => {
        return { ...pre, emailError: false };
      });
    }
    if (e.target.name === "message") {
      setIsInputError((pre) => {
        return { ...pre, messageError: false };
      });
    }
  };

  useEffect(() => {
    const messageHideHandler = setTimeout(() => {
      if (isSuccess) setIsSuccess(false);
      if (isError) setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(messageHideHandler);
    };
  }, [isSuccess, isError]);

  const messageCloseHandler = () => {
    setIsSuccess(false);
  };

  const errorCloseHandler = () => {
    setIsError(false);
  };

  return (
    <Card id={"contact"} title={"GET IN TOUCH"} overview={"Contact."}>
      <StyledStarsCanvas />
      <div className={styles["contact-container-main"]}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={styles["contact-container"]}
        >
          <form onSubmit={fromSubmitHandler}>
            <div>
              <label htmlFor={"name"} className={styles["name"]}>
                Your Name
              </label>
              <input
                onChange={inputHandler}
                className={
                  isInputError.nameError ? styles["invalid-input"] : " "
                }
                id={"name"}
                type={"text"}
                name={"name"}
                placeholder={"What's your name?"}
                value={inputData.name}
              />
            </div>
            <div>
              <label htmlFor={"email"} className={styles["name"]}>
                Your Email
              </label>
              <input
                onChange={inputHandler}
                className={
                  isInputError.emailError ? styles["invalid-input"] : " "
                }
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"What's your email?"}
                value={inputData.email}
              />
            </div>
            <div>
              <label htmlFor={"message"} className={styles["message"]}>
                Your Message
              </label>
              <textarea
                onChange={inputHandler}
                className={
                  isInputError.messageError ? styles["invalid-input"] : " "
                }
                id={"message"}
                name={"message"}
                placeholder={"What's your message"}
                value={inputData.message}
              >
                {inputData.message}
              </textarea>
            </div>
            {!isLoader && (
              <button type="submit">
                <img src={sendLogo} alt={"sendlogo"} /> Send
              </button>
            )}
            {isLoader && (
              <button disabled={true}>
                <SmallLoader />
              </button>
            )}
          </form>
        </motion.div>
        <div className={styles["canvas-div"]}>
          <SpaceCanvas />
        </div>
      </div>
      {isSuccess && <Message closeHandler={messageCloseHandler} />}
      {isError && (
        <Message
          closeHandler={errorCloseHandler}
          type={"error"}
          message={"Error Send Message!"}
        />
      )}
    </Card>
  );
};

export default Contact;

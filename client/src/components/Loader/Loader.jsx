import React from "react";
import styles from "./Loader.module.css";
import { Html } from "@react-three/drei";

export const CanvasLoader = () => {
  return <Html className={styles["loader-one"]}></Html>;
};

export const SmallLoader = () => {
  return <div className={styles["loader"]}></div>;
};

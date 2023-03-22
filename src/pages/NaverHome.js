import React, { useState } from "react";
import { Footer } from "../experiences/Footer";
import { Header } from "../experiences/Header";
import { MainContent } from "../experiences/MainContent";
import { Rightrail } from "../experiences/Rightrail";
import styles from "./naver-home.module.css";

export const Naver = () => {
  const [containerHeight, setContainerHeight] = useState(0);

  console.log("Naver", containerHeight);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContainer}>
        <MainContent setContainerHeight={setContainerHeight} />
        <Rightrail containerHeight={containerHeight} />
      </div>
      <Footer />
    </div>
  );
};

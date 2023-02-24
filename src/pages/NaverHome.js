import React from "react";
import styles from "./naver-home.module.css";
import { Header } from "../experiences/Header";
import { Navigation } from "../experiences/Navigation";
import { Rightrail } from "../experiences/Rightrail";
import { MainContent } from "../experiences/MainContent";
import { Footer } from "../experiences/Footer";

export const Naver = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <div className={styles.mainContainer}>
        <MainContent />
        <Rightrail />
      </div>
      <Footer />
    </div>
  );
};

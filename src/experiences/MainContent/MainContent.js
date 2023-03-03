import React from "react";
import { GridCardContainer } from "../../components/GridCardContainer";
import styles from "./main-content.module.css";

export const MainContent = () => {
  return (
    <div className={styles.container}>
      <GridCardContainer />
    </div>
  );
};

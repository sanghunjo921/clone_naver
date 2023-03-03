import React from "react";
import styles from "./contentCard.module.css";

export const ContentCard = ({ image, title, provider, publishedDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title}></img>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

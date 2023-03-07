import React from "react";
import styles from "./contentCard.module.css";
import DotSVG from "../../shared/svg/dot.svg";

export const ContentCard = ({ image, title, provider, publishedDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img className={styles.mainImage} src={image} alt={title}></img>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.provider}>
        <img
          className={styles.providerImg}
          src={provider.image}
          alt={provider.name}
        ></img>
        <div>{provider.name}</div>
        <img className={styles.divider} src={DotSVG} alt="dot" />
        <div className={styles.publishedDate}></div>
      </div>
    </div>
  );
};

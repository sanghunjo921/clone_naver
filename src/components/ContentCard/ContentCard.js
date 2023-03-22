import React from "react";
import styles from "./content-card.module.css";
import DotSVG from "../../shared/svg/dot.svg";
import { getDateFormat } from "./ContentCard.util";

export const ContentCard = ({ image, title, provider, publishedDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title} className={styles.mainImage} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.provider}>
        <img
          className={styles.providerImg}
          src={provider.image}
          alt={provider.name}
        />
        <span>{provider.name}</span>
        <img src={DotSVG} alt="dot" className={styles.divider} />
        <div className={styles.publishedDate}>
          {getDateFormat(publishedDate)}
        </div>
      </div>
    </div>
  );
};

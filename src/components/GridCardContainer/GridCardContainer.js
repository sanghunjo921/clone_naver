import React from "react";
import { ContentCard } from "../ContentCard";
import styles from "./gridcard-container.module.css";

export const GridCardContainer = ({ cards }) => {
  const renderContentCards = () =>
    cards.map((e, i) => <ContentCard key={i} {...e} />);
  return <div className={styles.container}>{renderContentCards()}</div>;
};

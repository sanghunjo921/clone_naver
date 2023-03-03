import React from "react";
import { ContentCard } from "../ContentCard";
import styles from "./gridcard-container.module.css";
import { gridCardContainerService } from "./GridCardContainerService";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];

export const GridCardContainer = () => {
  const renderContentCard = () =>
    gridCardContainerService.getData().map((e) => <ContentCard {...e} />);

  return <div className={styles.container}>{renderContentCard()}</div>;
};

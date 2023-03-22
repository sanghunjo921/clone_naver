import React, { useEffect, useRef, useState } from "react";
import { GridCardContainer } from "../../components/GridCardContainer";
import { contentCardService } from "../../services/ContentCard.service";
import { Navigation } from "../Navigation";
import { addObserverToTarget } from "./MainContent.observer";
import styles from "./main-content.module.css";

export const MainContent = ({ setContainerHeight }) => {
  const mainContentContainer = useRef();
  const delimeterContainer = useRef();
  const [isLastPage, setLastPage] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(contentCardService.getCurrentData());
    setContainerHeight(mainContentContainer.current.clientHeight);
  }, [setContainerHeight]);

  const nextPageHandler = () => {
    setCards([...cards, ...contentCardService.getNextData()]);
    setLastPage(contentCardService.isLastPage());
    setTimeout(() => {
      console.log("mainContent:", mainContentContainer.current.clientHeight);
      setContainerHeight(mainContentContainer.current.clientHeight);
    }, 0);
  };

  useEffect(() => {
    addObserverToTarget(mainContentContainer.current, [
      delimeterContainer.current,
    ]);
  }, []);

  return (
    <div className={styles.container} ref={mainContentContainer}>
      <Navigation />
      <GridCardContainer cards={cards} />
      {!isLastPage && (
        <div className={styles.delimeter} ref={delimeterContainer}>
          <button onClick={nextPageHandler}>+</button>
        </div>
      )}
    </div>
  );
};

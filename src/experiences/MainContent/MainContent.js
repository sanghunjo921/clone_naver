import React, { useEffect, useRef, useState } from "react";
import { GridCardContainer } from "../../components/GridCardContainer";
import { contentCardService } from "../../services/ContentCard.service";
import styles from "./main-content.module.css";

export const MainContent = ({ setContainerHeight }) => {
  const mainContentContainer = useRef(0);
  const [isLastPage, setLastPage] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(contentCardService.getCurrentData());
    setContainerHeight(mainContentContainer.current.clientHeight);
  }, []);

  const nextPageHandler = () => {
    setCards([...cards, ...contentCardService.getNextData()]);
    setLastPage(contentCardService.isLastPage());
    setContainerHeight(mainContentContainer.current.clientHeight);
  };

  return (
    <div className={styles.container} ref={mainContentContainer}>
      <GridCardContainer cards={cards} />
      {!isLastPage && (
        <div className={styles.delimeter}>
          <button onClick={nextPageHandler}>+</button>
        </div>
      )}
    </div>
  );
};

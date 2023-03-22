import React, { useState } from "react";
import styles from "./navigation.module.css";

export const Navigation = () => {
  const items = [
    "엔터",
    "스포츠",
    "자동차",
    "웹툰",
    "경제",
    "추천.구독",
    "레시피",
    "리빙",
    "책방",
    "패션뷰티",
    "엔터",
    "스포츠",
    "자동차",
    "웹툰",
    "경제",
    "추천.구독",
    "레시피",
    "리빙",
    "책방",
    "패션뷰티",
  ];
  const visibleNumber = 8;
  const [startPoint, setStartPoint] = useState(0);
  const [activePoint, setActivePoint] = useState(0);
  const [idx, setIdx] = useState(0);

  const prevBtnHandler = () => {
    let calculatedNum = 0;
    if (activePoint - 1 < 0) {
      if (idx - visibleNumber < 0) {
        setStartPoint(0);
        calculatedNum = idx;
      } else {
        setStartPoint(startPoint - visibleNumber);
        calculatedNum = visibleNumber;
      }
    }

    if (idx > 0) {
      setIdx(idx - 1);
      setActivePoint(activePoint - 1 + calculatedNum);
    }
  };

  const nextEndPoint = () => {
    return startPoint + visibleNumber - 1 + visibleNumber;
  };

  const nextBtnHandler = () => {
    let calculatedNum = 0;
    if (activePoint + 1 > 0 && activePoint + 1 === visibleNumber) {
      if (items.length < nextEndPoint()) {
        const updatedStartIdx = items.length - visibleNumber;
        setStartPoint(updatedStartIdx);
        calculatedNum = updatedStartIdx - startPoint;
      } else {
        setStartPoint(startPoint + visibleNumber);
        calculatedNum = visibleNumber;
      }
    }
    console.log(startPoint, activePoint, calculatedNum);
    if (idx !== items.length - 1) {
      setIdx(idx + 1);
      setActivePoint(activePoint + 1 - calculatedNum);
    }
  };

  console.log(startPoint, activePoint);
  return (
    <div className={styles.container}>
      {items.slice(startPoint, visibleNumber + startPoint).map((e, i) => {
        const key = Date.now().toString(32) + i;
        if (i === activePoint) {
          return (
            <div key={key} className={styles.active}>
              {e}
            </div>
          );
        }
        return <div key={key}>{e}</div>;
      })}
      {idx > 0 && (
        <button
          className={`${styles.btn} ${styles.leftBtn}`}
          onClick={prevBtnHandler}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
          </svg>
        </button>
      )}
      {idx !== items.length - 1 && (
        <button
          className={`${styles.btn} ${styles.rightBtn}`}
          onClick={nextBtnHandler}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </button>
      )}
    </div>
  );
};

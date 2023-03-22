import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { SquareCard } from "../../components/SquareCard";
import styles from "./rightrail.module.css";
import { addObserverToTarget } from "./Rightrail.observer";

export const Rightrail = ({ containerHeight }) => {
  let onScrollHandler;
  const RIGHTRAIL_HEIGHT = 996;
  const rightrailEl = useRef();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollDown, setScrollDown] = useState(true);

  const scrollHandler = function (e) {
    console.log(this.scrollY);
    setScrollDown(prevScrollY < this.scrollY);
    setPrevScrollY(this.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
  }, [prevScrollY, onScrollHandler]);

  useEffect(() => {
    addObserverToTarget(rightrailEl.current);
  }, []);

  onScrollHandler = debounce(scrollHandler, 300);

  console.log(
    "isScrollDown:",
    isScrollDown,
    `${
      isScrollDown
        ? "0px"
        : `${
            rightrailEl.current?.clientHeight -
            document.documentElement.clientHeight
          }px`
    }`,
    prevScrollY
  ); //top: -114px;
  console.log("containerHeight:", containerHeight);
  return (
    <div
      className={styles.container}
      style={{
        top: `${
          !isScrollDown
            ? "0px"
            : `-${
                rightrailEl.current?.clientHeight -
                document.documentElement.clientHeight
              }px`
        }`,
        height:
          containerHeight > RIGHTRAIL_HEIGHT
            ? `${RIGHTRAIL_HEIGHT}px`
            : `${containerHeight}px`,
      }}
      ref={rightrailEl}
    >
      <SquareCard />
      <SquareCard />
      <SquareCard />
    </div>
  );
};

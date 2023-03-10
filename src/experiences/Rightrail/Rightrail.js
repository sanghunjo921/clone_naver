import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import { SquareCard } from "../../components/SquareCard";
import styles from "./rightrail.module.css";

export const Rightrail = ({ containerHeight }) => {
  let onScrollHandler;
  const rightrailEl = useRef();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollDown, setScrollDown] = useState(true);

  const scrollHandler = function (e) {
    console.log(this.scrollY);
    setScrollDown(prevScrollY < this.scrollY);
    setPrevScrollY(this.scrollY);
  };

  useEffect(() => {
    onScrollHandler = throttle(scrollHandler, 300);
    window.addEventListener("scroll", onScrollHandler);
  }, [prevScrollY]);

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
          isScrollDown
            ? "0px"
            : `-${
                rightrailEl.current?.clientHeight -
                document.documentElement.clientHeight
              }px`
        }`,
      }}
      ref={rightrailEl}
    >
      <SquareCard />
      <SquareCard />
      <SquareCard />
    </div>
  );
};

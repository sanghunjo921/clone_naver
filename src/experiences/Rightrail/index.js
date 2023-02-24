import React, { useEffect, useRef, useState } from "react";
import { SquareCard } from "../../components/SquareCard";
import styles from "./rightrail.module.css";

export const Rightrail = () => {
  const rightrailEl = useRef();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    console.log(
      rightrailEl.current.clientHeight - document.documentElement.clientHeight
    );
    window.addEventListener("scroll", function (e) {
      setScrollDown(prevScrollY < this.scrollY);
      setPrevScrollY(this.scrollY);
    });
  }, [prevScrollY]);
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

import React, { useState } from "react";
import styles from "./header.module.css";

export const Header = () => {
  const [isShowMessage, setShowMessage] = useState(false);
  function messageBoxHandler() {
    setShowMessage(!isShowMessage);
  }
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="https://png.pngtree.com/element_pic/00/16/07/08577f369b99bed.jpg"
      ></img>
      <h1 className={styles.title}>Naver</h1>
      <div className="search">
        <div className={styles.searchBox}>
          <input type="text" />
          <div>
            <i className="fa-sharp fa-solid fa-keyboard"></i>
          </div>
          <div>
            {isShowMessage ? (
              <i
                className="fa-solid fa-caret-up"
                onClick={messageBoxHandler}
              ></i>
            ) : (
              <i
                className="fa-solid fa-caret-down"
                onClick={messageBoxHandler}
              ></i>
            )}
          </div>

          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        {isShowMessage && (
          <div className={styles.messageBox}>
            <div>
              <div>도움말</div>
              <div>신고</div>
            </div>
            <div>더보기</div>
          </div>
        )}
      </div>
    </div>
  );
};

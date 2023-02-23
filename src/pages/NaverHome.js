import React from "react";
import "./naver-home.css";
import { Header } from "../experiences/Header";
import { Navigation } from "../experiences/Navigation";
import { Rightrail } from "../experiences/Rightrail";
import { MainContent } from "../experiences/MainContent";

export const Naver = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="main-container">
        <MainContent />
        <Rightrail />
      </div>
    </div>
  );
};

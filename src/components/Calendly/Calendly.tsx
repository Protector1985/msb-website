"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import styles from "./styles/styles.module.css";
const Calendly: React.FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>
        Schedule a call with us to book a free on-site assessment
      </h1>
      <InlineWidget url="https://calendly.com/execudevinc" />
    </div>
  );
};

export default Calendly;

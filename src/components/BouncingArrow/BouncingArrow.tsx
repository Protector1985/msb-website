"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "./styles/styles.module.css";

const BouncingArrow: React.FC = () => {
  return (
    <div className={styles.bouncingArrow}>
      <FaArrowDown size={50} />
    </div>
  );
};

export default BouncingArrow;

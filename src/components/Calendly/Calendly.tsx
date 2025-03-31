"use client"
import React from 'react';
import { InlineWidget } from "react-calendly";
import styles from './styles/styles.module.css'
const Calendly:React.FC<any> = () => {
    return(
        <div className={styles.wrapper}>
        <h1 className={styles.headline}>Book a call to schedule an Assessment</h1>
        <InlineWidget url="https://calendly.com/execudevinc"  />
      </div>
    )
}

export default Calendly
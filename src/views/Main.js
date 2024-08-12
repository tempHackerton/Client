import React from 'react';
import styles from "../styles/Main.module.css";

function Main() {
  return (
    <div className={styles.body}>
      <div className={`${styles.wave} ${styles.one}`}></div>
      <div className={`${styles.wave} ${styles.two}`}></div>
      <div className={`${styles.wave} ${styles.three}`}></div>
    </div>
  )
}

export default Main

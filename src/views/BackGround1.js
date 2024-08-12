import React from 'react';
import styles from "../styles/Background1.module.css";

function BackGround() {
  return (
    <div className={styles.body}>
      <div className={`${styles.wave} ${styles.one}`}></div>
      <div className={`${styles.wave} ${styles.two}`}></div>
      <div className={`${styles.wave} ${styles.three}`}></div>
    </div>
  )
}

export default BackGround

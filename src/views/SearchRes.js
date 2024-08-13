import React from 'react';
import styles from '../styles/SearchRes.module.css';

function SearchRes() {
  return (
    <div className={styles.back}>
      <div style={{
        marginTop:"80px",
        width:"1600px",
        height:"200px",
        
      }}>
        <div className={styles.title}>용복이가 도착했습니다. 확인해주세요!</div>
          <div style={{
            marginTop:"1vh",
            width:window.screen.width
          }}>
          <div className={styles.filter}>필터:
               <input className={styles.box} type='text'></input>
          </div>
        </div>
        <div className={styles.contentwrap}>

        </div>
      </div>
    </div>
  )
}

export default SearchRes

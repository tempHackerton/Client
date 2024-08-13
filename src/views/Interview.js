import React, { useState } from "react";
import styles from "../styles/Interview.module.css";

const Interview = () => {
    const [isStarted, setIsstarted] = useState(false);

    function handleStartBtn() {
        setIsstarted(true);
    }

    return (
        <div className={styles.Back}>
            <div className={styles.Container}>
                <div className={styles.title}>자기소개서 첨삭</div>
                <div className={styles.content}>
                    자기소개서 쓰기 많이 어렵지 않나요?
                    <br /> 용복이가 도와줄거에요 걱정마세요
                </div>
                <div className={styles.btn} onClick={handleStartBtn}>
                    시작하기
                </div>
            </div>
        </div>
    );
};

export default Interview;

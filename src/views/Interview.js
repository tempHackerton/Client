import React, { useState } from "react";
import styles from "../styles/Interview.module.css";
import mascot5 from "../img/mascot5.png";

const Interview = () => {
    const [isStarted, setIsstarted] = useState(false);
    const [isInterviewStarted, setIsInterviewStarted] = useState(false);
    const [category, setCategory] = useState(null);

    function handleStartBtn() {
        setIsstarted(true);
    }

    return (
        <div>
            {!isStarted ? (
                <div className={styles.background}>
                    <div className={styles.mainWrapper}>
                        <img
                            className={styles.mascotPos}
                            src={mascot5}
                            alt=""
                        />
                        <div className={styles.mainBox}>
                            <div className={styles.searchTitle1}>
                                숨겨진 복지 찾기
                            </div>
                            <div className={styles.searchTitle2}>
                                다양한 복지 혜택과 정책이 있지만,
                                <br />
                                몰라서 놓친 적이 있으셨나요?
                                <br />
                                찾기가 어렵다면 저희 용복이가 찾아줄께요!
                            </div>
                            <button
                                className={styles.startBtn}
                                onClick={handleStartBtn}
                            >
                                시작해보기
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {!isInterviewStarted ? (
                        <div className={styles.background}>
                            <div className={styles.questionBox}></div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Interview;

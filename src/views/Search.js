import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import mainIcon from "../img/mainIcon.png";

const Search = () => {
    const [isStarted, setIsStarted] = useState(false); // 검사 시작했는지
    const [isInputDone, setIsInputDone] = useState(false); //

    function handleStartBtnClick() {
        setIsStarted(true);
        console.log(isStarted);
    }

    return (
        <div className={styles.background}>
            {!isStarted ? (
                <div className={styles.mainBox}>
                    <div className={styles.searchTitle1}>숨겨진 복지 찾기</div>
                    <div className={styles.searchTitle2}>
                        다양한 혜택과 복지가 있지만,
                        <br /> 몰라서 놓친 적이 있으셨나요?
                        <br />
                        찾기가 어렵다면 저희 용복이가 찾아줄께요!
                    </div>
                    <button
                        className={styles.startBtn}
                        onClick={handleStartBtnClick}
                    >
                        시작해보기
                    </button>
                </div>
            ) : !isInputDone ? ( // 정보 입력창
                <div className={styles.mainBox}>
                    <div className={styles.searchTitle1}>
                        정보를 입력해주세요
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Search;

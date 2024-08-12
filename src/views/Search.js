import React, { useState } from "react";
import styles from "../styles/Search.module.css";

const Search = () => {
    const [isLogined, setIsLogined] = useState(false);

    const handleStartBtnClick = () => {
        setIsLogined(!isLogined);
    };

    return (
        <div className={styles.background}>
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
                    onClick={() => handleStartBtnClick}
                >
                    시작해보기
                </button>
            </div>
        </div>
    );
};

export default Search;

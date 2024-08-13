import React, { useState } from "react";
import styles from "../styles/Main.module.css";
import mascot1 from "../img/mascot1.png";
import prevbutton from "../img/prevbutton.png";
import nextbutton from "../img/nextbutton.png";

function Main() {
    const [isStarted, setIsStarted] = useState(false); // 검사 시작했는지

    function handleStartBtnClick() {
        window.location.href = "/search";
    }

    return (
        <div className={styles.background}>
            <div className={styles.TitleWrapper}>
                <div className={styles.Title1}>나의 숨겨진 복지 찾기</div>
                <div className={styles.Title2}>
                    용복이가
                    <br />
                    용인 시민인 내가 받을 수 있는 복지가 있는지 찾아줍니다!
                </div>
                <button
                    className={styles.StartBtn}
                    onClick={handleStartBtnClick}
                >
                    시작해보기
                </button>
            </div>
            <img className={styles.mascot} src={mascot1} alt=""></img>

            <div className={styles.sliderWrapper}>
                <div className={styles.pageCircleWrapper}>
                    <div className={styles.pageCircle} />
                    <div className={styles.pageCircle} />
                    <div className={styles.pageCircle} />
                </div>
                {/* <nav className={styles.nav}>
                <img className={styles.btn} onClick={activate1} src={prevbutton} alt='prev'></img>
                <img className={styles.btn} onClick={activate2} src={nextbutton} alt='next'></img>
            </nav> */}
            </div>
        </div>
    );
}

export default Main;

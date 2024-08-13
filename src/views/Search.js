import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import mascot2 from "../img/mascot2.png";
import mascot3 from "../img/mascot3.png";

import form from "../views/Userform";
import Userform from "../views/Userform";

// TODO: 연결 로직 state === loading으로 바꾸기

const Search = () => {
    const [isStarted, setIsStarted] = useState(false); // 검사 시작했는지
    const [LoginChoice, SetLoginChoice] = useState("Login"); // 로그인 하시겠어요?
    const [isInputNeeded, setIsInputNeeded] = useState(false);
    const [isInputDone, setIsInputDone] = useState(false); // TODO: submit Button

    const [name, setName] = useState("");

    function handleStartBtnClick() {
        setIsStarted(true);
        window.location.href = "/Userform";
    }

    function handleLoginBtnClick() {
        SetLoginChoice("Login"); // 필요 시 로그인 페이지 이동 로직 추가
    }

    function handleNoLoginBtnClick() {
        SetLoginChoice("noLogin");
        console.log(LoginChoice);
        console.log(isInputNeeded);
    }

    return (
        <div>
            {!isStarted ? ( // 처음 화면
                <div className={styles.background}>
                    <div className={styles.mainWrapper}>
                        <img className={styles.mascotPos} src={mascot2} />
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
                                onClick={handleStartBtnClick}
                            >
                                시작해보기
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {LoginChoice === null && (
                        <div className={styles.background}>
                            <div className={styles.mainWrapper}>
                                <img
                                    className={styles.mascotPos}
                                    src={mascot3}
                                    alt=""
                                />
                                <div className={styles.mainBox}>
                                    <div className={styles.searchTitle1}>
                                        로그인 하시겠어요?
                                    </div>
                                    <div className={styles.searchTitle3}>
                                        로그인하면 새로운 복지 소식을 용복이가
                                        전해줘요!
                                    </div>
                                    <div className={styles.btnWrapper}>
                                        <button
                                            className={styles.startBtn}
                                            onClick={handleLoginBtnClick}
                                        >
                                            로그인할게요
                                        </button>
                                        <button
                                            className={styles.startBtn}
                                            onClick={handleNoLoginBtnClick}
                                        >
                                            괜찮아요
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
        // <div className={styles.background}>
        //     <div className={styles.tempTitleWrapper}>
        //         <div className={styles.tempTitle1}>나의 숨겨진 복지 찾기</div>
        //         <div className={styles.tempTitle2}>
        //             용복이가
        //             <br />
        //             용인 시민인 내가 받을 수 있는 복지가 있는지 찾아줍니다!
        //         </div>
        //         <button className={styles.tempStartBtn}>시작해보기</button>
        //     </div>

        //     <img className={styles.imgTest} src={mainIcon} alt=""></img>
        // </div>
    );
};

export default Search;

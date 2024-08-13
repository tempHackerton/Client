import React, { useState } from "react";
import styles from "../styles/Interview.module.css";
import mascot1 from "../img/mascot1.png";
import mascot5 from "../img/mascot5.png";
import mascot6 from "../img/mascot6.png";

const Interview = () => {
    const [isStarted, setIsstarted] = useState(false);
    const [isInterviewStarted, setIsInterviewStarted] = useState(false);
    const [category, setCategory] = useState(null);
    const [company, setCompany] = useState(null);
    const [interviewState, setInterviewState] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    // @@ test function
    const [messages, setMessages] = useState([]); // State to hold the list of messages
    const [inputValue, setInputValue] = useState(""); // State to hold the current input

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Add the new message to the list of messages
            setMessages([...messages, { sender: "user", text: inputValue }]);
            setInputValue(""); // Clear the input field
        }
    };

    // Simulate receiving a message from the server
    const receiveMessageFromServer = (message) => {
        setMessages([...messages, { sender: "bot", text: message }]);
    };

    // @@

    function handleStartBtn() {
        setIsstarted(true);
    }

    function handleInterviewBtn() {
        setIsInterviewStarted(true);
        setInterviewState("loading");
        setTimeout(() => {
            setInterviewState("activate");
        }, 3000);
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
        console.log("category: " + category);
    }

    function handleCompanyChange(e) {
        setCompany(e.target.value);
        console.log("company: " + company);
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={styles.back}>
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
                            <div className={styles.formBox}>
                                <p className={styles.question}>
                                    Q. 당신이 가고자 하는 분야를 알려주세요
                                </p>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="가고 싶은 분야"
                                    onChange={handleCategoryChange}
                                />
                                <p className={styles.question}>
                                    Q. 당신이 가고자 하는 회사를 알려주세요
                                </p>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="가고 싶은 회사"
                                    onChange={handleCompanyChange}
                                />

                                <p className={styles.question}>
                                    Q. 당신이 원하는 면접 형태를 골라 주세요
                                </p>
                                <div className={styles.options}>
                                    <label className={styles.option}>
                                        <input
                                            type="radio"
                                            name="interviewType"
                                            value="technical"
                                            checked={
                                                selectedOption === "technical"
                                            }
                                            onChange={handleOptionChange}
                                        />
                                        <span>기술 면접</span>
                                    </label>
                                    <label className={styles.option}>
                                        <input
                                            type="radio"
                                            name="interviewType"
                                            value="culture-fit"
                                            checked={
                                                selectedOption === "culture-fit"
                                            }
                                            onChange={handleOptionChange}
                                        />
                                        <span>컬쳐핏 면접</span>
                                    </label>
                                </div>

                                <button
                                    className={styles.button}
                                    onClick={handleInterviewBtn}
                                >
                                    시작하기
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {interviewState === "loading" ? (
                                <div className={styles.background}>
                                    <div className={styles.formBox}>
                                        <img
                                            className={styles.loadingImg}
                                            src={mascot6}
                                            alt=""
                                        />
                                        <div className={styles.loadingText}>
                                            잠시만 기다려주세요 용복이가 찾고
                                            있어요~
                                        </div>
                                    </div>
                                </div>
                            ) : interviewState === "activate" ? ( // 채팅창
                                <div className={styles.background}>
                                    <div className={styles.container}>
                                        <div className={styles.chatWindow}>
                                            {messages.map((message, index) => (
                                                <div
                                                    key={index}
                                                    className={styles.message}
                                                >
                                                    <img
                                                        src={
                                                            message.sender ===
                                                            "user"
                                                                ? { mascot1 }
                                                                : { mascot5 }
                                                        }
                                                        alt="avatar"
                                                        className={
                                                            styles.avatar
                                                        }
                                                    />
                                                    <div
                                                        className={
                                                            styles.bubble
                                                        }
                                                    >
                                                        {message.text}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.inputArea}>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                placeholder="Type a message..."
                                                value={inputValue}
                                                onChange={(e) =>
                                                    setInputValue(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button
                                                className={styles.sendButton}
                                                onClick={handleSendMessage}
                                            >
                                                입력
                                            </button>
                                        </div>
                                        <button className={styles.endButton}>
                                            면접 종료하기
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Interview;

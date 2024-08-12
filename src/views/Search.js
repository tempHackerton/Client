import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import mainIcon from "../img/mainIcon.png";

const Search = () => {
    const [isStarted, setIsStarted] = useState(false); // 검사 시작했는지
    const [isInputDone, setIsInputDone] = useState(false); // TODO: submit Button

    const [name, setName] = useState("");

    function handleStartBtnClick() {
        setIsStarted(true);
        console.log(isStarted);
    }

    // 이름 값
    function onChangeName(e) {
        setName(e.target.value);
    }

    // gpt code@@
    const [formData, setFormData] = useState({
        name: "",
        dob: {
            year: "",
            month: "",
            day: "",
        },
        residenceDate: "",
        maritalStatus: "single",
        numOfChildren: "",
        gender: "male",
        calendarType: "solar",
        disabilityStatus: "none",
    });

    // Handle change for input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle change for nested dob fields
    const handleDobChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            dob: {
                ...formData.dob,
                [name]: value,
            },
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        // You can add further processing, like sending the data to an API
    };

    return (
        <div>
            {!isStarted ? (
                <div className={styles.background}>
                    <div className={styles.TitleWrapper}>
                        <div className={styles.Title1}>
                            나의 숨겨진 복지 찾기
                        </div>
                        <div className={styles.Title2}>
                            용복이가
                            <br />
                            용인 시민인 내가 받을 수 있는 복지가 있는지
                            찾아줍니다!
                        </div>
                        <button
                            className={styles.StartBtn}
                            onClick={handleStartBtnClick}
                        >
                            시작해보기
                        </button>
                    </div>
                    <img className={styles.imgTest} src={mainIcon} alt=""></img>
                </div>
            ) : !isInputDone ? ( // 정보 입력창
                <div className={styles.background}>
                    <div className={styles.mainBox}>
                        <div className={styles.searchTitle1}>
                            정보를 입력해주세요
                        </div>

                        {/* 이름 */}
                        <div className={styles.inputWrap}>
                            <div className={styles.inputTitle}>
                                <div>이름</div>
                                <input
                                    // onKeyDown={handleKeyDown}
                                    onChange={(e) => {
                                        onChangeName(e);
                                    }}
                                    className={styles.textEP1}
                                    placeholder=""
                                />
                            </div>
                        </div>

                        {/* gpt code */}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>이름</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>생년월일</label>
                                <input
                                    type="text"
                                    name="year"
                                    placeholder="Year"
                                    value={formData.dob.year}
                                    onChange={handleDobChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="month"
                                    placeholder="Month"
                                    value={formData.dob.month}
                                    onChange={handleDobChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="day"
                                    placeholder="Day"
                                    value={formData.dob.day}
                                    onChange={handleDobChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>용인 거주 날짜(년)</label>
                                <input
                                    type="date"
                                    name="residenceDate"
                                    value={formData.residenceDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>기혼 여부</label>
                                <select
                                    name="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={handleChange}
                                >
                                    <option value="married">Married</option>
                                    <option value="single">Single</option>
                                </select>
                            </div>

                            <div>
                                <label>자녀 수</label>
                                <input
                                    type="number"
                                    name="numOfChildren"
                                    value={formData.numOfChildren}
                                    onChange={handleChange}
                                    min="0"
                                />
                            </div>

                            <div>
                                <label>성별</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label>양력/음력</label>
                                <select
                                    name="calendarType"
                                    value={formData.calendarType}
                                    onChange={handleChange}
                                >
                                    <option value="solar">Solar</option>
                                    <option value="lunar">Lunar</option>
                                </select>
                            </div>

                            <div>
                                <label>장애 여부</label>
                                <select
                                    name="disabilityStatus"
                                    value={formData.disabilityStatus}
                                    onChange={handleChange}
                                >
                                    <option value="none">None</option>
                                    <option value="mild">Mild</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="severe">Severe</option>
                                </select>
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div></div>
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

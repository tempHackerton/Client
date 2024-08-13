import React, { useState } from "react";
import styles from "../styles/Modal/PolicyInfoModal.module.css";
import mascot from "../img/mascot1.png";

const PolicyInfoModal = ({ isOpen, onClose, policies }) => {
    if (!isOpen) return null; // Do not render the modal if it is not open

    const policyList = {
        policies: [
            {
                name: "돌봄 아동 - 대학생 매칭 학습 지원",
                type: "복지지원",
                startTime: "상반기 2024.2 / 하반기 2024.8",
                endTime: "상반기 2024.7 / 하반기 2024.12",
                target: "18세 ~ 39세 관내 대학(원)생 및 3년 이내 대학 졸업생",
                description:
                    "대학생 - 돌봄 아동 매칭을 통한 학습 지도 및 재능 발굴",
            },
            {
                name: "용인시 일자리센터를 통한 청년 취업 지원",
                type: "일자리창출",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "청년 중 미취업자",
                description:
                    "구인구직 상담, 취업 알선, 취업 교육 운영 등 종합적 취업 지원 서비스 제공",
            },
            {
                name: "용인시 청년 창업지원센터 운영",
                type: "창업지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "창업자 및 예비 창업자",
                description: "창업 성공을 위한 각종 지원 서비스 제공",
            },
            {
                name: "청년 창업 지원금 제공",
                type: "창업지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "창업자 또는 예비 창업자",
                description: "청년 창업자의 창업 초기 자금 지원",
            },
        ],
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.chatWindow}>
                    {policies.map((policy, index) => (
                        <div key={index} className={styles.message}>
                            <div className={styles.bubble}>
                                <h3>{policy.name}</h3>
                                <p>
                                    <strong>Type:</strong> {policy.type}
                                </p>
                                <p>
                                    <strong>Start Time:</strong>{" "}
                                    {policy.startTime}
                                </p>
                                <p>
                                    <strong>End Time:</strong> {policy.endTime}
                                </p>
                                <p>
                                    <strong>Target Audience:</strong>{" "}
                                    {policy.target}
                                </p>
                                <p>
                                    <strong>Description:</strong>{" "}
                                    {policy.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PolicyInfoModal;

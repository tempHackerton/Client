import React, { useState } from "react";
import styles from "../styles/Modal/PolicyInfoModal.module.css";

const PolicyInfoModal = ({ isOpen, onClose, policy }) => {
    if (!isOpen) return null; // Do not render the modal if it is not open

    const policyInfo = {
        id: 17,
        created_at: "2024-08-13T11:14:09.000Z",
        is_read: 1, //0은 안읽은거 , 1인건 읽은거
        policy_id: 17,
        name: "청년 건강검진 지원",
        type: "복지지원",
        startTime: "2024.1",
        endTime: "2024.12",
        target: "18세 ~ 39세 청년",
        description: "청년들의 건강한 생활을 위한 정기 건강검진 지원",
    };

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_container}>
                <button className={styles.closeButton} onClick={onClose}>
                    닫기
                </button>
                <h2 className={styles.title}>{policy.name}</h2>
                <p className={styles.detail}>
                    <strong>종류 :</strong> {policy.type}
                </p>
                <p className={styles.detail}>
                    <strong>기간 :</strong> {policy.startTime} ~{" "}
                    {policy.endTime}
                </p>
                <p className={styles.detail}>
                    <strong>대상 :</strong> {policy.target}
                </p>
                <p className={styles.detail}>
                    <strong>내용 :</strong> {policy.description}
                </p>
            </div>
        </div>
    );
};

export default PolicyInfoModal;

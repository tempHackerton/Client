import React, { useState } from "react";
import styles from "../styles/Modal/PolicyListModal.module.css";
import PolicyInfoModal from "./PolicyInfoModal";
import mascotIcon from "../img/mascotIcon.png";

const PolicyListModal = ({ isOpen, onClose, policies }) => {
    const [isPolicyInfoOpen, setIsPolicyInfoOpen] = useState(false); // State to manage PolicyInfoModal visibility
    const [selectedPolicy, setSelectedPolicy] = useState(null); // State to store the selected policy

    if (!isOpen) return null; // Do not render the modal if it is not open

    const policyList = {
        policies: [
            {
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
            },
            {
                id: 1,
                created_at: "2024-08-13T10:56:35.000Z",
                is_read: 1,
                policy_id: 1,
                name: "ICT 디바이스 용인 랩 운영 사업",
                type: "창업지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "예비 - 초기 창업자, 재직자, 중소기업, 청년 등",
                description:
                    "역량 강화 교육 및 개발 환경 제공을 통해 지역 내 ICT 산업 생태계 조성 및 사업화 촉진",
            },
            {
                id: 17,
                created_at: "2024-08-13T11:14:09.000Z",
                is_read: 0, //0은 안읽은거 , 1인건 읽은거
                policy_id: 17,
                name: "청년 건강검진 지원",
                type: "복지지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "18세 ~ 39세 청년",
                description: "청년들의 건강한 생활을 위한 정기 건강검진 지원",
            },
            {
                id: 1,
                created_at: "2024-08-13T10:56:35.000Z",
                is_read: 1,
                policy_id: 1,
                name: "ICT 디바이스 용인 랩 운영 사업",
                type: "창업지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "예비 - 초기 창업자, 재직자, 중소기업, 청년 등",
                description:
                    "역량 강화 교육 및 개발 환경 제공을 통해 지역 내 ICT 산업 생태계 조성 및 사업화 촉진",
            },
            {
                id: 17,
                created_at: "2024-08-13T11:14:09.000Z",
                is_read: 0, //0은 안읽은거 , 1인건 읽은거
                policy_id: 17,
                name: "청년 건강검진 지원",
                type: "복지지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "18세 ~ 39세 청년",
                description: "청년들의 건강한 생활을 위한 정기 건강검진 지원",
            },
            {
                id: 1,
                created_at: "2024-08-13T10:56:35.000Z",
                is_read: 0,
                policy_id: 1,
                name: "ICT 디바이스 용인 랩 운영 사업",
                type: "창업지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "예비 - 초기 창업자, 재직자, 중소기업, 청년 등",
                description:
                    "역량 강화 교육 및 개발 환경 제공을 통해 지역 내 ICT 산업 생태계 조성 및 사업화 촉진",
            },
            {
                id: 17,
                created_at: "2024-08-13T11:14:09.000Z",
                is_read: 0, //0은 안읽은거 , 1인건 읽은거
                policy_id: 17,
                name: "청년 건강검진 지원",
                type: "복지지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "18세 ~ 39세 청년",
                description: "청년들의 건강한 생활을 위한 정기 건강검진 지원",
            },
            {
                id: 1,
                created_at: "2024-08-13T10:56:35.000Z",
                is_read: 0,
                policy_id: 1,
                name: "ICT 디바이스 용인 랩 운영 사업",
                type: "창업지원",
                startTime: "2024.1",
                endTime: "2024.12",
                target: "예비 - 초기 창업자, 재직자, 중소기업, 청년 등",
                description:
                    "역량 강화 교육 및 개발 환경 제공을 통해 지역 내 ICT 산업 생태계 조성 및 사업화 촉진",
            },
        ],
    };

    function handleWrittenMessage(policy_id) {
        console.log(policy_id);
        // is_read post logic
    }

    const handlePolicyClick = (policy) => {
        setSelectedPolicy(policy); // Set the selected policy
        setIsPolicyInfoOpen(true); // Open the PolicyInfoModal
        handleWrittenMessage(policy.policy_id); // Log the policy ID or handle other logic
    };

    return (
        <div className={styles.modal_overlay}>
            <PolicyInfoModal
                isOpen={isPolicyInfoOpen}
                onClose={() => setIsPolicyInfoOpen(false)}
                policy={selectedPolicy} // Pass the selected policy to the modal
            />
            <div className={styles.container}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.chatWindow}>
                    {/* policies */}
                    {policyList.policies.map((policy, index) => (
                        <div key={index} className={styles.message}>
                            <img
                                className={styles.avatar}
                                style={{
                                    width: "2.617vw",
                                    height: "6.122vh",
                                    borderRadius: "50%",
                                    marginLeft: "0.5vw",
                                }}
                                src={mascotIcon}
                                alt=""
                            />
                            <div
                                className={styles.bubble}
                                style={{
                                    backgroundColor:
                                        policy.is_read === 1
                                            ? "#e5de94"
                                            : "#f9f19f",
                                }}
                                onClick={() => handlePolicyClick(policy)} // Trigger event on click
                            >
                                <h3>{policy.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PolicyListModal;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Modal/PolicyListModal.module.css";
import PolicyInfoModal from "./PolicyInfoModal";
import mascotIcon from "../img/mascotIcon.png";

const PolicyListModal = ({ isOpen, onClose }) => {
    const [isPolicyInfoOpen, setIsPolicyInfoOpen] = useState(false); // State to manage PolicyInfoModal visibility
    const [selectedPolicy, setSelectedPolicy] = useState(null); // State to store the selected policy
    const [policies, setPolicies] = useState([]); // State to store fetched policies
    const [error, setError] = useState(null); // State to handle errors
    const [loading, setLoading] = useState(true); // State to handle loading state

    useEffect(() => {
        if (isOpen) {
            fetchPolicies();
        }
    }, [isOpen]);

    const fetchPolicies = async () => {
        try {
            // Fetch policies from the server
            const response = await axios.get(
                "http://Server-env.eba-icmaspkc.ap-northeast-2.elasticbeanstalk.com/policies/Alarm"
            );
            setPolicies(response.data.result); // Assuming the data is directly in response.data
        } catch (error) {
            setError(
                error.message || "An error occurred while fetching policies."
            );
        } finally {
            setLoading(false); // Stop the loading indicator
        }
    };

    function handleWrittenMessage(id) {
        console.log(id);
        // is_read post logic
        const postData = async () => {
            try {
                const response = await axios.post(
                    "http://Server-env.eba-icmaspkc.ap-northeast-2.elasticbeanstalk.com/policies/readAlarm",
                    {
                        id: id, // The data being sent in the POST request
                    }
                );
                console.log("Response:", response.data);
                console.log("Change is_read is success!");
                // You can handle the response here if needed
            } catch (error) {
                console.error("Error during POST request:", error.message);
                // Handle the error if needed
            }
        };

        postData();
    }

    const handlePolicyClick = (policy) => {
        setSelectedPolicy(policy); // Set the selected policy
        setIsPolicyInfoOpen(true); // Open the PolicyInfoModal
        handleWrittenMessage(policy.id); // Log the policy ID or handle other logic
    };

    if (!isOpen) return null; // Do not render the modal if it is not open

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
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading &&
                        !error &&
                        policies.map((policy, index) => (
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
                                    onClick={() => {
                                        handlePolicyClick(policy);
                                        policy.is_read = 1;
                                    }} // Trigger event on click
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

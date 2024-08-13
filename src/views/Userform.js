import React, { useState } from 'react';
import styles from '../styles/Userform.module.css';

function Userform() {

    const [isStart, setisStart] = useState(false);
  // Define state for all form fields
  const [formData, setFormData] = useState({
    name: '',
    dob: {
      year: '',
      month: '',
      day: '',
    },
    residenceDate: '',
    maritalStatus: 'single',
    numOfChildren: '',
    gender: 'male',
    calendarType: 'solar',
    disabilityStatus: 'none',
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
    console.log('Form Data Submitted: ', formData);
    setisStart(true);
    window.location.href = "/SearchRes";
    // You can add further processing, like sending the data to an API
  };

  return (
    <div style={{
        justifyContent:"center",
        width:"100vw",
        height:"100vh",
        display:"flex"
    }}>
    <div className={styles.back}>
        { !isStart &&
        <form onSubmit={handleSubmit}>
        <div>
            <div className={styles.title}>정보를 입력해주세요</div>
            <label className={styles.txt}>이름:</label>
            <input
            className={styles.box1}
            placeholder='장준용'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>

        <div>
            <label className={styles.txt}>생년월일:</label>
            <input
            className={styles.box2}
            type="text"
            name="year"
            placeholder="2000"
            value={formData.dob.year}
            onChange={handleDobChange}
            required
            />
            <input
            className={styles.box2}
            type="text"
            name="month"
            placeholder="2"
            value={formData.dob.month}
            onChange={handleDobChange}
            required
            />
            <input
            className={styles.box2}
            type="text"
            name="day"
            placeholder="21"
            value={formData.dob.day}
            onChange={handleDobChange}
            required
            />
        </div>

        <div>
            <label className={styles.txt}>용인 거주 시작일:</label>
            <input
            className={styles.box3}
            type="text"
            name="residenceDate"
            placeholder='2022-02-14'
            value={formData.residenceDate}
            onChange={handleChange}
            required
            />
        </div>

        <div>
            <label className={styles.txt}>기혼 여부:</label>
            <select
            className={styles.box4}
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            >
            <option value="single">미혼</option>
            <option value="married">기혼</option>
            <option value="divorced">이혼</option>
            <option value="widowed">사별</option>
            </select>
        </div>

        <div>
            <label className={styles.txt}>자녀 수:</label>
            <input
            className={styles.box5}
            type="number"
            name="numOfChildren"
            placeholder='0'
            value={formData.numOfChildren}
            onChange={handleChange}
            min="0"
            />
        </div>

        <div>
            <label className={styles.txt}>성별:</label>
            <select
            className={styles.box4}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            >
            <option value="male">남</option>
            <option value="female">여</option>
            <option value="other">기타</option>
            </select>
        </div>

        <div>
            <label className={styles.txt}>음력/양력:</label>
            <select
            className={styles.box4}
            name="calendarType"
            value={formData.calendarType}
            onChange={handleChange}
            >
            <option value="Solar">양력</option>
            <option value="Lunar">음력</option>
            </select>
        </div>

        <div>
            <label className={styles.txt}>장애 여부:</label>
            <select
            className={styles.box4}
            name="disabilityStatus"
            value={formData.disabilityStatus}
            onChange={handleChange}
            >
            <option value="none">없음</option>
            <option value="mild">1급</option>
            <option value="moderate">2급</option>
            <option value="severe">3급</option>
            </select>
        </div>

        <button className={styles.btn} onClick={handleSubmit} type="submit">제출하기</button>
        </form>
        }
    </div>
    </div>
  );
}

export default Userform;
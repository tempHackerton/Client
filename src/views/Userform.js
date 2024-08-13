import React, { useState } from 'react';
import styles from '../styles/Userform.module.css';

import running from '../runmascot.png';

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
    setTimeout(() => {
        window.location.href = "/SearchResult";
    }, 5000);
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
            <label className={styles.txt}>Name:</label>
            <input
            className={styles.box1}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>

        <div>
            <label className={styles.txt}>Date of Birth:</label>
            <input
            className={styles.box2}
            type="text"
            name="year"
            placeholder="Year"
            value={formData.dob.year}
            onChange={handleDobChange}
            required
            />
            <input
            className={styles.box2}
            type="text"
            name="month"
            placeholder="Month"
            value={formData.dob.month}
            onChange={handleDobChange}
            required
            />
            <input
            className={styles.box2}
            type="text"
            name="day"
            placeholder="Day"
            value={formData.dob.day}
            onChange={handleDobChange}
            required
            />
        </div>

        <div>
            <label className={styles.txt}>Date of Residence in Yongin:</label>
            <input
            className={styles.box3}
            type="date"
            name="residenceDate"
            value={formData.residenceDate}
            onChange={handleChange}
            required
            />
        </div>

        <div>
            <label className={styles.txt}>Marital Status:</label>
            <select
            className={styles.box4}
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            </select>
        </div>

        <div>
            <label className={styles.txt}>Number of Children:</label>
            <input
            className={styles.box5}
            type="number"
            name="numOfChildren"
            value={formData.numOfChildren}
            onChange={handleChange}
            min="0"
            />
        </div>

        <div>
            <label className={styles.txt}>Gender:</label>
            <select
            className={styles.box4}
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
            <label className={styles.txt}>Calendar Type:</label>
            <select
            className={styles.box4}
            name="calendarType"
            value={formData.calendarType}
            onChange={handleChange}
            >
            <option value="solar">Solar</option>
            <option value="lunar">Lunar</option>
            </select>
        </div>

        <div>
            <label className={styles.txt}>Disability Status:</label>
            <select
            className={styles.box4}
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

        <button className={styles.btn} onClick={handleSubmit} type="submit">제출하기</button>
        </form>
        }
        {isStart &&(
            <img
            className={styles.loding}
            src={running}
            alt='loding'
            />
        )}
    </div>
    </div>
  );
}

export default Userform;
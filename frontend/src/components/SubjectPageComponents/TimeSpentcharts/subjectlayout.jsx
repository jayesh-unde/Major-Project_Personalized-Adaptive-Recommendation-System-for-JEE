import React from 'react';
import styles from './subjectlayout.module.css'; 

const SubjectLayout = ({ setSelectedSubject }) => {
  const menuItem = [
    { name: "Physics" },
    { name: "Chemistry" },
    { name: "Mathematics" },
  ];

  const handleChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div className={styles['dropdown-container']}>
      <nav>
        <select 
          className={styles['dropdown']} 
          onChange={handleChange} 
          defaultValue="Physics"
        >
          {menuItem.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </nav>
    </div>
  );
};

export default SubjectLayout;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Subjectcard.module.css";
function Subjectcard(props) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/section/${props.subject}`);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: props.color }}
      onClick={handleClick}
    >
      <div className={styles.subContainerOne}>
        <div className={styles.iconHolder}>
          <div className={styles.icon}>
            <props.icon />
          </div>
        </div>
        <div className={styles.subheading}>
          {props.subject}
        </div>
      </div>
      <div className={styles.subContainerTwo}>
        <h4>Recommended topic of subject</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam.
        </div>
      </div>
    </div>
  );
}

export default Subjectcard;

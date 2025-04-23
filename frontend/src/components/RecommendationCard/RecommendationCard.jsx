import React from 'react'
import styles from "./RecommendationCard.module.css"
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function RecommendationCard(props) {
  const navigate = useNavigate();
  
  const getDefaultContent = (subject) => {
    const contents = {
      Physics: "Master fundamental concepts of mechanics, electromagnetics, and modern physics",
      Chemistry: "Explore organic reactions, chemical bonding, and thermodynamics",
      Mathematics: "Practice calculus, coordinate geometry, and algebra problems",
      default: "Strengthen your foundation in core JEE concepts"
    };
    return contents[subject] || contents.default;
  };

  const onTopicClick = () => {
    console.log("clicked");
    {props.context === "Topic" ? navigate('/section/Physics') : navigate(`/chapters/${props.recommendedText}`)}
  }

  return (
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <div className={styles.subContainerOne}>
          <div className={styles.iconHolder}>
            <div className={styles.icon}>
              <props.icon/>
            </div>
          </div>
          <div className={styles.subheading}>
            {props.subject || "Subject"}
          </div>
      </div>
      <div className={styles.subContainerTwo}>
        <h4>Recommended {props.context || "Topic"}</h4>
        <div className={styles.recommendedTopic}>
          {props.recommendedText ?
          <div>
            <h3>{props.recommendedText}</h3>
            <button onClick={onTopicClick} className={styles.topicButton}>
              Start your journey <span style={{fontSize:"20px", marginLeft:"10px", paddingTop:"5px"}}><FaArrowCircleRight/></span>
            </button>
          </div>
          : getDefaultContent(props.subject)}
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard
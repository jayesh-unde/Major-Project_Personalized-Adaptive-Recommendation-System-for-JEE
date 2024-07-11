import React from 'react'
import styles from "./RecommendationCard.module.css"
function RecommendationCard(props) {
  return (
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <div className={styles.subContainerOne}>
          <div className={styles.iconHolder}>
            <div className={styles.icon}>
              <props.icon/>
            </div>
          </div>
          <div className={styles.subheading}>
              Subject
          </div>
      </div>
      <div className={styles.subContainerTwo}>
        <h4>recommended topic of subject</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam.
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard
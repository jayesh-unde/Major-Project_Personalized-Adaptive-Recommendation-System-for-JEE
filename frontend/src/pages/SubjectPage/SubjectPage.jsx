import React, { useState } from 'react'
import styles from './SubjectPage.module.css'
import { useSelector } from 'react-redux'
import Linecharts from '../../components/SubjectPageComponents/TimeSpentcharts/linecharts'
import Donutchart from '../../components/SubjectPageComponents/ProgressDonutChart/Donutchart'
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard'
import SubjectLayout from '../../components/SubjectPageComponents/TimeSpentcharts/subjectlayout'
import { TbMathSymbols } from "react-icons/tb";

const Subject_page = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={styles.subjectpagebox}>
      <div className={styles.userWelcome}>
        <div className={styles.welcomeMessage}><span style={{ color: "#0C7FDA" }}>{user.name}!</span></div>
        <p className={styles.slogan}>Unleash Your Potential with JEECode</p>
      </div>
      <div className={styles.cardContainer}>
          <RecommendationCard color="#0163FD" icon={TbMathSymbols}/>
          <RecommendationCard color="#FD0101" icon={TbMathSymbols}/>
          <RecommendationCard color="#FD9801" icon={TbMathSymbols}/>
      </div>
      <div className={styles.questionattempted}>
        <Donutchart subject="Physics"
          section={{ color1: '#9BDFC4', color2: '#62B2FD' }} />
        <Donutchart subject="Chemistry"
          section={{ color1: '#9BDFC4', color2: '#62B2FD' }} />
        <Donutchart subject="Mathematics"
          section={{ color1: '#9BDFC4', color2: '#62B2FD' }} />
      </div>
      <div className={styles.timespentcharts}>
      <SubjectLayout setSelectedSubject={setSelectedSubject}  />
      <Linecharts subject={selectedSubject} className={styles.linechart}/>
      </div>
    </div>
  )
}

export default Subject_page
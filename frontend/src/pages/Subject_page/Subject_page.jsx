import React, { useState } from 'react'
import styles from './Subject_page.module.css'
import { useSelector } from 'react-redux'
import Linecharts from '../../components/SubjectPageComponents/TimeSpentcharts/linecharts'
import Donutchart from '../../components/SubjectPageComponents/ProgressDonutchart/Donutchart'
import RecommendationCard from '../../components/SubjectPageComponents/SubjectCard/Subjectcard'
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
        <RecommendationCard color="#0163FD" subject="Physics" icon={TbMathSymbols} />
        <RecommendationCard color="#FD0101" subject="Chemistry" icon={TbMathSymbols} />
        <RecommendationCard color="#FD9801" subject="Mathematics" icon={TbMathSymbols} />
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
        <SubjectLayout setSelectedSubject={setSelectedSubject} />
        <Linecharts subject={selectedSubject} />
      </div>
    </div>
  )
}

export default Subject_page

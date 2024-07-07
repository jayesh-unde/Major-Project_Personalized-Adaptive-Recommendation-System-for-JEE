import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard'
import styles from "./MainLayout.module.css"
import { TbMathSymbols } from "react-icons/tb";
const MainLayout = () => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={styles.mainSection} style={{marginLeft: isOpen?"300px":"100px", transition: "1s"}}>
        <h2>Recommended for you</h2>
        <div className={styles.cardContainer}>
          <RecommendationCard color="#0163FD" icon={TbMathSymbols}/>
          <RecommendationCard color="#FD0101" icon={TbMathSymbols}/>
          <RecommendationCard color="#FD9801" icon={TbMathSymbols}/>
          <RecommendationCard color="#FD017A" icon={TbMathSymbols}/>
        </div>
      </div>

     

    </>
  )
}

export default MainLayout
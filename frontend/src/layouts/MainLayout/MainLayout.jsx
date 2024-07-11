import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from "./MainLayout.module.css"
import HomeAfter from '../../pages/HomeAfter/HomeAfter'
const MainLayout = () => {
  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={styles.mainSection} style={{marginLeft: isOpen?"300px":"100px", transition: "1s"}}>
        <HomeAfter/>
      </div>

     

    </>
  )
}

export default MainLayout
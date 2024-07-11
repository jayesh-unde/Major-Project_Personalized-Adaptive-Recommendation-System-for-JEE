import React from 'react'
import MainLayout from './layouts/MainLayout/MainLayout'
import FocusedSubjects from './components/FocusedSubjects/FocusedSubjects'
import Benefits from "./components/Benefits/Benefits"        
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout/>
      {/* <FocusedSubjects/>
      <Benefits/>                     */}
      

    </BrowserRouter>
  )
}

export default App
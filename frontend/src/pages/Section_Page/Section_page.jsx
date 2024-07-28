import React from 'react'
import styles from './Section_page.module.css'
import { useParams } from 'react-router-dom';
import SectionDropDowncard from '../../components/SectionPageComponent/SectionDropDowncard';
const Section_page = () => {
  const { subjectName } = useParams();
  const topicsData = {
    Physics: [
      { name: "Mechanics", subtopics: ["Mathematic Tools", "Unit and Dimension", "Fluid", "Kinematics", "Newtons Law of Motion", "Friction", "Circular Motion"] },
      { name: "Thermal Physics", subtopics: ["Heat Transfer", "Thermodynamics", "Kinetic Theory"] },
      { name: "Oscillation and wave", subtopics: ["Simple Harmonic Motion", "String Waves", "Sound Waves"] },
      { name: "Electromagnemtism", subtopics: ["Electrostatic", "Capacitance", "Alternating Current", "Electromagnetic Induction"] }
    ],
    Chemistry: [
      { name: "Organic Chemistry", subtopics: ["Alkanes", "Alkenes", "Alkynes"] },
      { name: "Inorganic Chemistry", subtopics: ["Periodic Table", "Chemical Bonding", "Coordination Compounds"] }
    ],
    Mathematics: [
      { name: "Algebra", subtopics: ["Linear Equations", "Quadratic Equations", "Polynomials"] },
      { name: "Calculus", subtopics: ["Limits", "Derivatives", "Integrals"] }
    ]
  };
  return (
    <div>
      <div className={styles.heading}>
        <div style={{ color: "#0C7FDA" }}>
          {subjectName}
        </div>
      </div>
      <div>
        <SectionDropDowncard subject={subjectName} topicsData={topicsData} />
      </div>
    </div>
  )
}

export default Section_page

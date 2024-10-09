import React from 'react'
import DoughnutChart from '../DoughnutChart/DoughnutChart'
import styles from './SubjectWiseAnalysis.module.css'
import RecommendationCard from '../../RecommendationCard/RecommendationCard';
import { TbMathIntegralX } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { SiReactos } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";

function SubjectWiseAnalysis({ subject, userInfo,extraInfo }) {
    const navigate = useNavigate();

    const subjectData = subject=='Physics'?userInfo.physics:subject=='Chemistry'?userInfo.chemistry:userInfo.mathematics; 
    const onTopicClick = ()=>{
        console.log(subject,"clicked")
        navigate('/section/Mathematics');
    } 

    const easy = subjectData.easy
    const medium = subjectData.medium 
    const hard = subjectData.hard 
    const data = [easy, medium,hard]

    const currectQuestions = subjectData.solvedQuestions.length 
    const incorrectQuestions = subjectData.incorrectQuestions.length

    const totalSubmissions = currectQuestions + incorrectQuestions;
    const accuracy = (currectQuestions / totalSubmissions)*100

    return (
        
            <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <DoughnutChart
                    title={subject}
                    data={{
                        labels: ['Easy', 'Medium', 'Hard'],
                        datasets: [{
                            data: data,
                            backgroundColor: ['#6bdd6b','#FFCE56','#FF6384' ],
                            hoverBackgroundColor: ['#6bdd6b','#FFCE56','#FF6384']
                        }]
                    }}
                    extraDetails={{
                        'Easy': `${easy}`,
                        'Medium': `${medium}`,
                        'Hard': `${hard}`,
                        'Total Submissions': `${totalSubmissions}`,
                        'Accuracy': `${accuracy.toFixed(2)}%`
                    }}
                />
            </div>
            <div className={styles.subContainer}>
            {!extraInfo?"":
                    <div className={styles.extraInfo}>
                        <button 
                            onClick={onTopicClick} 
                            className={styles.topicButton}>
                                Continue {subject} journey 
                                <span style={{fontSize:"20px", marginLeft:"10px", paddingTop:"5px"}}>
                                    <FaArrowCircleRight/>
                                </span>
                        </button>
                        <RecommendationCard 
                            color="#0163FD" 
                            icon={TbMathIntegralX}
                            recommendedText="Projectile Motion"
                            subject={subject}
                            context="Topic"
                        />
                        <RecommendationCard 
                            color="#FD9801" 
                            icon={SiReactos}
                            recommendedText="Kinematics"
                            subject={subject}
                            context="Chapter"
                        />
                    </div>
                    }  
            </div>
        </div>
    )
}

export default SubjectWiseAnalysis
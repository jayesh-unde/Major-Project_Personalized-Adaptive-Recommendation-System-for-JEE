import React from 'react'
import DoughnutChart from '../DoughnutChart/DoughnutChart'
import styles from './SubjectWiseAnalysis.module.css'
function SubjectWiseAnalysis({ subject, userInfo }) {
    const subjectData = subject=='Physics'?userInfo.physics:subject=='Chemistry'?userInfo.chemistry:userInfo.mathematics; 

    const easy = subjectData.easy
    const medium = subjectData.medium 
    const hard = subjectData.hard 
    const data = [easy, medium,hard]

    const currectQuestions = subjectData.solvedQuestions.length 
    const attempedQuestions = subjectData.attempedQuestions.length 
    const incorrectQuestions = subjectData.incorrectQuestions.length

    const totalSubmissions = currectQuestions + attempedQuestions + incorrectQuestions 
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
                Some Extra Info
            </div>
        </div>
    )
}

export default SubjectWiseAnalysis
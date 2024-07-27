import styles from "./Progress.module.css"
import RankChart from "../../components/ProgressComponents/RankChart/RankChart";
import DoughnutChart from "../../components/ProgressComponents/DoughnutChart/DoughnutChart";
import QuestionStatistics from "../../components/ProgressComponents/QuestionStatistics/QuestionStatistics";
import SubjectStatistics from "../../components/ProgressComponents/SubjectStatistics/SubjectStatistics";
import { useSelector } from 'react-redux'
import React from 'react';




function Progress() {
    const { user } = useSelector((state) => state.auth);
    const userInfo = {
        registerDate: "2023-10-12T21:42:22Z",
        rating: 320,
        ranks: [900,743,800,610,620,500,340,350,320],
        level: 4,
        solvedQuestionsUniversal : [1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,45, 46, 47, 48], // submissionId's : Question correct 
        incorrectQuestionsUniversal : [1,2,11,12], // incorrect 
        attempedQuestionsUniversal:[13], // attemped ( attemped means clicked but not submitted anytime)
        levelUpdates: ["2023-10-12T21:42:22Z","2023-11-12T21:42:22Z","2024-01-20T21:42:22Z","2024-05-12T21:42:22Z"],
        physics: {
            solvedQuestions: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], // submissions Id's : correct Question
            attempedQuestions: [13], // submission Id's : Attemped but not submitted Questions ( questions is clicked )
            incorrectQuestions: [1,2,11,12], // submitted but incorrect
            easy: 8,
            medium: 4,
            hard: 3,
        },
        chemistry: {
            solvedQuestions: [16,17,18,19,20,21,22,23,24,25,26,27],
            attempedQuestions: [16,17,17,17,17,18,18,19,21],
            incorrectQuestions: [16,20,22,23,24],
            easy: 4, 
            medium: 3,
            hard: 4
        },
        mathematics:{
            solvedQuestions: [28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],
            attempedQuestions: [28,29,30,31,32,33],
            incorrectQuestions: [28,29,35],
            easy: 10,
            medium: 8,
            hard: 3
        },
    }
    const physicsSolvedQuestionsLength = userInfo.physics.solvedQuestions.length
    const physicsAttempedQuestionsLength = userInfo.physics.attempedQuestions.length
    const physicsIncorrectQuestionsLength = userInfo.physics.incorrectQuestions.length
    const chemistrySolvedQuestionsLength = userInfo.chemistry.solvedQuestions.length
    const chemistryAttempedQuestionsLength = userInfo.chemistry.attempedQuestions.length
    const chemistryIncorrectQuestionsLength = userInfo.chemistry.incorrectQuestions.length
    const mathematicsSolvedQuestionsLength = userInfo.mathematics.solvedQuestions.length
    const mathematicsAttempedQuestionsLength = userInfo.mathematics.attempedQuestions.length
    const mathematicsIncorrectQuestionsLength = userInfo.mathematics.incorrectQuestions.length

    const TotalQuestionSolvedData = [physicsSolvedQuestionsLength, chemistrySolvedQuestionsLength,mathematicsSolvedQuestionsLength]
    const physicsTotalSubmissions = physicsSolvedQuestionsLength  + physicsIncorrectQuestionsLength
    const chemistryTotalSubmissions = chemistrySolvedQuestionsLength  + chemistryIncorrectQuestionsLength
    const mathematicsTotalSubmissions = mathematicsSolvedQuestionsLength  + mathematicsIncorrectQuestionsLength

    
    const totalSubmissions = physicsTotalSubmissions+chemistryTotalSubmissions+mathematicsTotalSubmissions
    const totalCorrectSubmissions = physicsSolvedQuestionsLength+mathematicsSolvedQuestionsLength+chemistrySolvedQuestionsLength
    const accuracy = (totalCorrectSubmissions / totalSubmissions ) * 100
    const level = userInfo.level
    const levelData = [level,10-level]

    
    const formattedDatesLevelUpdates = userInfo.levelUpdates.map(dateString => {
        let date = new Date(dateString);
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0-11, so add 1
        let year = date.getFullYear();
        return `${day}-${month}-${year}`;
    });
    const extraDetails = {}
    let ind = 1;
    formattedDatesLevelUpdates.map(date => {
        extraDetails[`Level ${ind}`] = date;
        ind++;
    })
    

    return (
        <div className={styles.progressPage}>
            <div className={styles.userWelcome}>
                <div className={styles.welcomeMessage}>Welcome back, <span style={{ color: "#0C7FDA" }}>{user.name}!</span></div>
                <p className={styles.slogan}>Unleash Your Potential with JEECode</p>
            </div>
            <div className={styles.rankContainer}>
                <RankChart userInfo={userInfo} />
            </div>
            <div className={styles.subjectAndLevelAnalyticsContainer}>
                <div className={styles.doughnutContainer}>
                    <DoughnutChart 
                        title={'Total Question Attemped'} 
                        data = {{
                            labels: ['Physics', 'Mathematics', 'Chemistry'],
                            datasets: [{
                                data: TotalQuestionSolvedData,
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                            }]
                        }}
                        extraDetails={{
                            'Physics':`${physicsSolvedQuestionsLength}`,
                            'Mathematics':`${mathematicsSolvedQuestionsLength}`,
                            'Chemistry':`${chemistrySolvedQuestionsLength}`,
                            'Total Submissions':`${totalSubmissions}`,
                            'Accuracy':`${accuracy.toFixed(2)}%`
                        }}
                    />
                </div>
                <div className={styles.doughnutContainer}>
                    <DoughnutChart 
                        title={'Level'} 
                        data = {{
                            labels: ['You', 'Yet to Complete'],
                            datasets: [{
                                data: levelData,
                                backgroundColor: [ '#36A2EB', '#FFCE56'],
                                hoverBackgroundColor: [ '#36A2EB', '#FFCE56']
                            }]
                        }}
                        extraDetails={extraDetails}
                    />
                </div>
            </div>
            <div className={styles.questionStatistics}>
                <QuestionStatistics userInfo={userInfo} />
            </div>
            <div className={styles.subjectStatistics}>
                <SubjectStatistics userInfo={userInfo}/>
            </div>

        </div>
    )
}

export default Progress
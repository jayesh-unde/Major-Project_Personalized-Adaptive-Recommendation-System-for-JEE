import React, { useState } from 'react';
import styles from './QuestionStatistics.module.css'
import BarChart from './BarChart';
import { useEffect } from 'react';



const Monthly = ({submissions})=>{
   
    function getTotalQuestionsAndTime(month, year, submissions) {
        const startOfMonth = new Date(`${year}-${month}-01T00:00:00Z`);
        const endOfMonth = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth() + 1, 0, 23, 59, 59, 999).toISOString();

        let totalQuestions = 0;
        let totalTime = 0;

        for (let i = submissions.length - 1; i >= 0; i--) {
            const timestamp = submissions[i].submissionTimestamp;
            if (timestamp >= startOfMonth.toISOString() && timestamp <= endOfMonth) {
                totalQuestions++;
                totalTime += submissions[i].timeSpent;
            } else if (timestamp < startOfMonth.toISOString()) {
                break;
            }
        }

        return { totalQuestions, totalTime };
    }

    function generateMonthlyData(currentDateStr, submissions) {
        const monthlyData = [];
        const date = new Date(currentDateStr);
        let currentYear = date.getFullYear();

        for (let i = 0; i < 12; i++) {
            const month = (date.getMonth() - i + 12) % 12 + 1;
            if (month==12 && i!=0){
                currentYear = currentYear - 1;
            }
            const monthName = new Date(currentYear, month - 1).toLocaleString('default', { month: 'long' });
            const { totalQuestions, totalTime } = getTotalQuestionsAndTime(
                String(month).padStart(2, '0'),
                currentYear,
                submissions
            );

            monthlyData.push({ day: monthName, questions: totalQuestions, time: totalTime/60 });
        }

        return monthlyData.reverse();
    }

    const currentDateStr = Date.now();
    const monthlyData = generateMonthlyData(currentDateStr, submissions);
    const labels = []
    for(let i=0;i<=11;i++){
        labels.push(monthlyData[i].day)
    }
    return(
        <div className={styles.barChartContainer}>
            <BarChart title={'Monthly'} labels={labels} data={monthlyData}/>
        </div>
    )
}
const Daily = ({submissions})=>{
    function getDayName(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndex = new Date(date).getDay();
        return days[dayIndex];
    }

    function getTotalQuestionsAndTime(dateStr, submissions) {
        const date = new Date(dateStr);
        const startOfDay = new Date(date.setHours(0, 0, 0, 0)).toISOString();
        const endOfDay = new Date(date.setHours(23, 59, 59, 999)).toISOString();

        let totalQuestions = 0;
        let totalTime = 0;

        for (let i = submissions.length - 1; i >= 0; i--) {
            const timestamp = submissions[i].submissionTimestamp;
            if (timestamp >= startOfDay && timestamp <= endOfDay) {
                totalQuestions++;
                totalTime += submissions[i].timeSpent;
            } else if (timestamp < startOfDay) {
                break;
            }
        }

        return { totalQuestions, totalTime };
    }

    function generateWeeklyData(currentDateStr, submissions) {
        const weeklyData = [];

        for (let i = 6; i >= 0; i--) {
            const date = new Date(currentDateStr);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayName = getDayName(dateStr);
            const { totalQuestions, totalTime } = getTotalQuestionsAndTime(dateStr, submissions);

            weeklyData.push({ day: dayName, questions: totalQuestions, time: totalTime/60 });
        }

        return weeklyData;
    }

    const currentDateStr = Date.now();
    const weeklyData = generateWeeklyData(currentDateStr, submissions);
    const labels = []
    for(let i=0;i<=6;i++){
        labels.push(weeklyData[i].day)
    }
    return(
        <div className={styles.barChartContainer}>
            <BarChart title={'Daily'} labels={labels} data={weeklyData}/>
        </div>
    )
}

const QuestionStatistics = ({userInfo,submissionData}) => {
    const [selectedComponent, setSelectedComponent] = useState('Daily');
    // using the submissionId of the totalSubmissionUniversal we can get below data
    const submissions = submissionData;
    

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Monthly':
                return <Monthly submissions={submissions} />;
            default:
                return <Daily submissions={submissions}/>;
        }
    };

    return (
        <div>
            <h2 style={{margin:"0 0 15px 0"}}>Reports</h2>
            <div className={styles.toggleContainer}>
                <button 
                    onClick={() => setSelectedComponent('Daily')} 
                    style={{backgroundColor:selectedComponent=='Daily'?"#36A2EB":"aliceblue"}}
                >
                    Daily
                </button>
                <button 
                    onClick={() => setSelectedComponent('Monthly')}
                    style={{backgroundColor:selectedComponent=='Monthly'?"#36A2EB":"aliceblue"}}
                >
                    Monthly
                </button>
            </div>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
};

export default QuestionStatistics;
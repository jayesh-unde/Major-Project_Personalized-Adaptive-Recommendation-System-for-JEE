import React, { useState } from 'react';
import styles from './QuestionStatistics.module.css'
import BarChart from './BarChart';

const submissionData = [
    { submissionId: 1, timeSpent: 156, submissionTimestamp: "2024-07-01T00:00:00Z", trials: 1, questionId: "a1b2c3d4e5f6g7h8i9j0k1l2" },
    { submissionId: 2, timeSpent: 291, submissionTimestamp: "2024-07-01T01:00:00Z", trials: 2, questionId: "b1c2d3e4f5g6h7i8j9k0l1m2" },
    { submissionId: 3, timeSpent: 43, submissionTimestamp: "2024-07-01T02:00:00Z", trials: 1, questionId: "c1d2e3f4g5h6i7j8k9l0m1n2" },
    { submissionId: 4, timeSpent: 134, submissionTimestamp: "2024-07-01T03:00:00Z", trials: 2, questionId: "d1e2f3g4h5i6j7k8l9m0n1o2" },
    { submissionId: 5, timeSpent: 276, submissionTimestamp: "2024-07-01T04:00:00Z", trials: 1, questionId: "e1f2g3h4i5j6k7l8m9n0o1p2" },
    { submissionId: 6, timeSpent: 89, submissionTimestamp: "2024-07-02T00:00:00Z", trials: 1, questionId: "f1g2h3i4j5k6l7m8n9o0p1q2" },
    { submissionId: 7, timeSpent: 264, submissionTimestamp: "2024-07-02T01:00:00Z", trials: 2, questionId: "g1h2i3j4k5l6m7n8o9p0q1r2" },
    { submissionId: 8, timeSpent: 197, submissionTimestamp: "2024-07-02T02:00:00Z", trials: 1, questionId: "h1i2j3k4l5m6n7o8p9q0r1s2" },
    { submissionId: 9, timeSpent: 112, submissionTimestamp: "2024-07-02T03:00:00Z", trials: 2, questionId: "i1j2k3l4m5n6o7p8q9r0s1t2" },
    { submissionId: 10, timeSpent: 305, submissionTimestamp: "2024-07-02T04:00:00Z", trials: 1, questionId: "j1k2l3m4n5o6p7q8r9s0t1u2" },
    { submissionId: 11, timeSpent: 178, submissionTimestamp: "2024-07-03T00:00:00Z", trials: 1, questionId: "k1l2m3n4o5p6q7r8s9t0u1v2" },
    { submissionId: 12, timeSpent: 53, submissionTimestamp: "2024-07-03T01:00:00Z", trials: 2, questionId: "l1m2n3o4p5q6r7s8t9u0v1w2" },
    { submissionId: 13, timeSpent: 246, submissionTimestamp: "2024-07-03T02:00:00Z", trials: 1, questionId: "m1n2o3p4q5r6s7t8u9v0w1x2" },
    { submissionId: 14, timeSpent: 113, submissionTimestamp: "2024-07-03T03:00:00Z", trials: 2, questionId: "n1o2p3q4r5s6t7u8v9w0x1y2" },
    { submissionId: 15, timeSpent: 189, submissionTimestamp: "2024-07-03T04:00:00Z", trials: 1, questionId: "o1p2q3r4s5t6u7v8w9x0y1z2" },
    { submissionId: 16, timeSpent: 99, submissionTimestamp: "2024-07-04T00:00:00Z", trials: 1, questionId: "p1q2r3s4t5u6v7w8x9y0z1a2" },
    { submissionId: 17, timeSpent: 287, submissionTimestamp: "2024-07-04T01:00:00Z", trials: 2, questionId: "q1r2s3t4u5v6w7x8y9z0a1b2" },
    { submissionId: 18, timeSpent: 231, submissionTimestamp: "2024-07-04T02:00:00Z", trials: 1, questionId: "r1s2t3u4v5w6x7y8z9a0b1c2" },
    { submissionId: 19, timeSpent: 45, submissionTimestamp: "2024-07-04T03:00:00Z", trials: 2, questionId: "s1t2u3v4w5x6y7z8a9b0c1d2" },
    { submissionId: 20, timeSpent: 265, submissionTimestamp: "2024-07-04T04:00:00Z", trials: 1, questionId: "t1u2v3w4x5y6z7a8b9c0d1e2" },
    { submissionId: 21, timeSpent: 110, submissionTimestamp: "2024-07-05T00:00:00Z", trials: 1, questionId: "u1v2w3x4y5z6a7b8c9d0e1f2" },
    { submissionId: 22, timeSpent: 198, submissionTimestamp: "2024-07-05T01:00:00Z", trials: 2, questionId: "v1w2x3y4z5a6b7c8d9e0f1g2" },
    { submissionId: 23, timeSpent: 123, submissionTimestamp: "2024-07-05T02:00:00Z", trials: 1, questionId: "w1x2y3z4a5b6c7d8e9f0g1h2" },
    { submissionId: 24, timeSpent: 299, submissionTimestamp: "2024-07-05T03:00:00Z", trials: 2, questionId: "x1y2z3a4b5c6d7e8f9g0h1i2" },
    { submissionId: 25, timeSpent: 83, submissionTimestamp: "2024-07-05T04:00:00Z", trials: 1, questionId: "y1z2a3b4c5d6e7f8g9h0i1j2" },
    { submissionId: 26, timeSpent: 276, submissionTimestamp: "2024-07-06T00:00:00Z", trials: 1, questionId: "z1a2b3c4d5e6f7g8h9i0j1k2" },
    { submissionId: 27, timeSpent: 134, submissionTimestamp: "2024-07-06T01:00:00Z", trials: 2, questionId: "a2b3c4d5e6f7g8h9i0j1k2l3" },
    { submissionId: 28, timeSpent: 287, submissionTimestamp: "2024-07-06T02:00:00Z", trials: 1, questionId: "b2c3d4e5f6g7h8i9j0k1l2m3" },
    { submissionId: 29, timeSpent: 98, submissionTimestamp: "2024-07-06T03:00:00Z", trials: 2, questionId: "c2d3e4f5g6h7i8j9k0l1m2n3" },
    { submissionId: 30, timeSpent: 264, submissionTimestamp: "2024-07-06T04:00:00Z", trials: 1, questionId: "d2e3f4g5h6i7j8k9l0m1n2o3" },
    { submissionId: 31, timeSpent: 134, submissionTimestamp: "2024-07-07T00:00:00Z", trials: 1, questionId: "e2f3g4h5i6j7k8l9m0n1o2p3" },
    { submissionId: 32, timeSpent: 198, submissionTimestamp: "2024-07-07T01:00:00Z", trials: 2, questionId: "f2g3h4i5j6k7l8m9n0o1p2q3" },
    { submissionId: 33, timeSpent: 43, submissionTimestamp: "2024-07-07T02:00:00Z", trials: 1, questionId: "g2h3i4j5k6l7m8n9o0p1q2r3" },
    { submissionId: 34, timeSpent: 276, submissionTimestamp: "2024-07-07T03:00:00Z", trials: 2, questionId: "h2i3j4k5l6m7n8o9p0q1r2s3" },
    { submissionId: 35, timeSpent: 112, submissionTimestamp: "2024-07-07T04:00:00Z", trials: 1, questionId: "i2j3k4l5m6n7o8p9q0r1s2t3" },
    { submissionId: 36, timeSpent: 231, submissionTimestamp: "2024-07-08T00:00:00Z", trials: 1, questionId: "j2k3l4m5n6o7p8q9r0s1t2u3" },
    { submissionId: 37, timeSpent: 156, submissionTimestamp: "2024-07-08T01:00:00Z", trials: 2, questionId: "k2l3m4n5o6p7q8r9s0t1u2v3" },
    { submissionId: 38, timeSpent: 45, submissionTimestamp: "2024-07-08T02:00:00Z", trials: 1, questionId: "l2m3n4o5p6q7r8s9t0u1v2w3" },
    { submissionId: 39, timeSpent: 287, submissionTimestamp: "2024-07-08T03:00:00Z", trials: 2, questionId: "m2n3o4p5q6r7s8t9u0v1w2x3" },
    { submissionId: 40, timeSpent: 99, submissionTimestamp: "2024-07-08T04:00:00Z", trials: 1, questionId: "n2o3p4q5r6s7t8u9v0w1x2y3" },
    { submissionId: 41, timeSpent: 291, submissionTimestamp: "2024-07-09T00:00:00Z", trials: 1, questionId: "o2p3q4r5s6t7u8v9w0x1y2z3" },
    { submissionId: 42, timeSpent: 89, submissionTimestamp: "2024-07-09T01:00:00Z", trials: 2, questionId: "p2q3r4s5t6u7v8w9x0y1z2a3" },
    { submissionId: 43, timeSpent: 43, submissionTimestamp: "2024-07-09T02:00:00Z", trials: 1, questionId: "q2r3s4t5u6v7w8x9y0z1a2b3" },
    { submissionId: 44, timeSpent: 178, submissionTimestamp: "2024-07-09T03:00:00Z", trials: 2, questionId: "r2s3t4u5v6w7x8y9z0a1b2c3" },
    { submissionId: 45, timeSpent: 305, submissionTimestamp: "2024-07-09T04:00:00Z", trials: 1, questionId: "s2t3u4v5w6x7y8z9a0b1c2d3" },
    { submissionId: 46, timeSpent: 112, submissionTimestamp: "2024-07-10T00:00:00Z", trials: 1, questionId: "t2u3v4w5x6y7z8a9b0c1d2e3" },
    { submissionId: 47, timeSpent: 43, submissionTimestamp: "2024-07-10T01:00:00Z", trials: 2, questionId: "u2v3w4x5y6z7a8b9c0d1e2f3" },
    { submissionId: 48, timeSpent: 198, submissionTimestamp: "2024-07-10T02:00:00Z", trials: 1, questionId: "v2w3x4y5z6a7b8c9d0e1f2g3" }
];
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

    const currentDateStr = "2024-07-10T04:00:00Z";
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

    const currentDateStr = "2024-07-10T04:00:00Z";
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

const QuestionStatistics = ({userInfo}) => {
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
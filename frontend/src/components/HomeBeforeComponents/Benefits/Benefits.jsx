import React from 'react'
import styles from "./Benefits.module.css"
import { SiReactos } from "react-icons/si";

function Card({ color, iconP, subject, topic, description }) {
    return (
        <>
            <div className={styles.card} style={{background: `linear-gradient(${color},${color}) top right/60% 40% no-repeat`}}>
                <div className={styles.card2} style={{background: `linear-gradient(${color}, ${color}) bottom left/60% 40% no-repeat`}}>
                    <div className={styles.card3}>
                        <div className={styles.subContainerOne}>
                            <div className={styles.iconHolder} style={{backgroundColor: color}}>
                                <div className={styles.icon}>
                                    <SiReactos/>
                                </div>
                            </div>
                            <div className={styles.subject}>
                                {subject}
                            </div>
                        </div>
                        <div className={styles.subContainerTwo}>
                            <h4>{topic}</h4>
                            <div>
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Benefits = () => {
    const benefitsData = [
        {
            color: "#FAAB00",
            icon: SiReactos,
            subject: "Physics",
            topic: "Interactive Learning",
            description: "Practice with our adaptive question bank that adjusts to your learning pace"
        },
        {
            color: "#0163FD",
            icon: SiReactos,
            subject: "Chemistry",
            topic: "Personalized Path",
            description: "Get customized recommendations based on your performance and learning style"
        },
        {
            color: "#FAAB00",
            icon: SiReactos,
            subject: "Mathematics",
            topic: "Progress Tracking",
            description: "Monitor your improvement with detailed analytics and performance metrics"
        },
        {
            color: "#FAAB00",
            icon: SiReactos,
            subject: "All Subjects",
            topic: "Expert Support",
            description: "Access comprehensive solutions and expert guidance for better understanding"
        }
    ];

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>WHY CHOOSE US</div>
                <h1 className={styles.subtitle}>Benefits of practicing with us</h1>
                <div className={styles.cardContainer}>
                    {benefitsData.map((benefit, index) => (
                        <Card
                            key={index}
                            color={benefit.color}
                            iconP={benefit.icon}
                            subject={benefit.subject}
                            topic={benefit.topic}
                            description={benefit.description}
                        />
                    ))}
                </div>
                <div className={styles.BenefitsContainer}>
                </div>
            </div>
        </>
    )
}

export default Benefits
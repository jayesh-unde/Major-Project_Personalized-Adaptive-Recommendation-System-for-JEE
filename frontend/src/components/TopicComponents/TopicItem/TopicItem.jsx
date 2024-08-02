import React from 'react';
import styles from './TopicItem.module.css';

const TopicItem = ({ topic,start}) => {
    const progress= 0;
    console.log("progress",progress)
    return (
        <div className={styles.topicItem}>
            <div className={styles.topicName}>{topic}</div>
            <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                    <div 
                        className={styles.progressFill} 
                        style={{ width: `${progress.toFixed(0)}%` }} 
                    ></div>
                </div>
                <span className={styles.progressPercent}>{progress}%</span>
            </div>
            <button onClick={() => start(topic)} className={styles.topicButton}>
                {progress>0?"Continue":"Start"}
            </button>
        </div>
    );
};

export default TopicItem;
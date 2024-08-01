import React, { useState } from 'react';
import styles from './SectionDropDowncard.module.css';

const SectionDropDowncard = ({ subject, topicsData }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const selectedTopics = topicsData[subject] || [];

    const toggleDropdown = (event, topic) => {
        if (event.target.type === 'checkbox') {
            return;
        }
        setOpenDropdown(openDropdown === topic ? null : topic);
    };

    return (
        <div className={styles.sectionCard}>
            {selectedTopics.map((topic, index) => (
                <div key={index} className={styles.topicContainer}>
                    <button
                        onClick={(event) => toggleDropdown(event, topic.name)}
                        className={`${styles.topicButton} ${openDropdown === topic.name ? styles.topicButtonActive : ''}`}
                    >
                        <input type="checkbox" className={styles.checkbox} />
                        <span className={styles.topicsname}>{topic.name}</span>
                        <svg
                            className={`${styles.dropdownIcon} ${openDropdown === topic.name ? styles.dropdownIconOpen : ''}`}
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 10L12 15L17 10"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {openDropdown === topic.name && (
                        <div className={styles.dropdownMenu}>
                            <ol className={styles.subtopicsList}>
                                {topic.subtopics.map((subtopic, subIndex) => (
                                    <li key={subIndex} className={styles.dropdownItem}>
                                        <label>
                                            <div className={styles.listcompo}>
                                                <div className={styles.subtopics}>
                                                    {subtopic}
                                                </div>
                                                <div className={styles.checkboxprop}>
                                                    <input type="checkbox" className={styles.checkbox2} />
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionDropDowncard;
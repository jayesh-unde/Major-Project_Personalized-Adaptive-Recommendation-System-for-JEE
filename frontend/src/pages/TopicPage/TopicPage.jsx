import React from 'react'
import TopicList from '../../components/TopicComponents/TopicList/TopicList'
import SearchBar from '../../components/TopicComponents/SearchBar/SearchBar'
import styles from './TopicPage.module.css'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { findTopics,findFirstQuestionByTopic } from '../../http';
import { useNavigate } from 'react-router-dom';

function TopicPage() {
  const chapterName = "Kinematics"; // Extracting the chapterName from the URL
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTopics = async () => {
        try {
            const { data } = await findTopics({chapterName});
            console.log(data.topics);
            setTopics(data.topics);
        } catch (err) {
            console.error('Error fetching topics:', err);
        }
    };

    fetchTopics();
}, []);

  const handleStartClick = async (topic) => {
    try {
        const { data } = await findFirstQuestionByTopic({ topic });
        if (data.question) {
            navigate(`/Kinematics/${data.question._id}`);
        }
    } catch (err) {
        console.error('Error fetching first question:', err);
    }
};
  return (
    <div className={styles.mainContainer }>
        <SearchBar chapterName={chapterName} />
        <TopicList topics={topics} start={handleStartClick}/>
    </div>
  )
}

export default TopicPage;




    
    
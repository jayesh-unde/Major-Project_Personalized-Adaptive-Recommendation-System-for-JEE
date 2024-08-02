import {React, useState, useEffect } from 'react';
import TopicItem from '../TopicItem/TopicItem';
import styles from './TopicList.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const postChapterData = async (chapterName, userName) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Accessing the backend URL from the environment variable

    try {
        const response = await axios.post(`${backendUrl}/api/get-topics`, {
            chapterName: chapterName, // Sending chapterName in the request body
            userName: userName
        });

        console.log('Response from backend:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        return null;
    }
};

const TopicList = ({topics,start}) => {
    const [chapterData, setChapterData] = useState(null);
    const { chapterName } = useParams(); // Extracting the chapterName from the URL
    const { user } = useSelector((state) => state.auth);
    const userName = user.name;
    useEffect(() => {
        const fetchData = async () => {
            const data = await postChapterData(chapterName,userName);
            setChapterData(data);
        };

        fetchData();
    }, [chapterName]);

    console.log(chapterData)
    return (
        <div>
            <h1>&nbsp;</h1>
            <h2 className={styles.heading}>Topics</h2>
            
            {topics ? (
                <div className={styles.itemContainer}>
                    {topics.map((topic, index) => (
                        <TopicItem key={index} topic={topic} start={start}/>
                    ))}    
                </div>
            ) : (
                <p>Loading chapter data...</p>
            )}

        </div>
    );
};

export default TopicList;
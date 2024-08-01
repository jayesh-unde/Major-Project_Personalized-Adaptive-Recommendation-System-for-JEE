import React from 'react'
import TopicList from '../../components/TopicComponents/TopicList/TopicList'
import SearchBar from '../../components/TopicComponents/SearchBar/SearchBar'
import styles from './TopicPage.module.css'
import { useParams } from 'react-router-dom';

function TopicPage() {
  const { chapterName } = useParams(); // Extracting the chapterName from the URL
  return (
    <div className={styles.mainContainer }>
        <SearchBar chapterName={chapterName} />
        <TopicList />
    </div>
  )
}

export default TopicPage
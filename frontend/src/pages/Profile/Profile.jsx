import React from 'react';
import styles from "./Profile.module.css";
import { BiSolidQuoteLeft,BiSolidQuoteRight  } from "react-icons/bi";
import { useSelector } from 'react-redux'


const ProfileHeader = ({name,email,img,classs}) => {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profileCard}>
                <div className={styles.profileImage}>
                    <img src={img || "/images/userIcon1.jpeg"} alt='profile'/>
                </div>
                <div className={styles.profileInfo}>
                    <h2 className={styles.profileName}>{name}</h2>
                    <p className={styles.profileTitle}>student</p>
                    <p className={styles.profileEmail}>Email: {email}</p>
                    <p className={styles.profileGrade}>Class: {classs || "12th"}</p>
                </div>
                <div className={styles.buttonHolder}>
                    <button className={styles.submit}>Edit</button>
                </div>
            </div>
        </div>
    );
};
const StatsCard = ({ totalQuestionsAttempted,
    totalQuizesAttempted,
    rank }) => {
    return (
        <div className={styles.statsCard}>
            <div className={styles.statItem}>
                <div className={styles.statTitle}>Total Questions Attempted</div>
                <p className={styles.statValue}>{totalQuestionsAttempted}</p>
            </div>
            <hr className={styles.divider} />
            <div className={styles.statItem}>
                <div className={styles.statTitle}>Total Quizes Attempted</div>
                <p className={styles.statValue}>{totalQuizesAttempted}</p>
            </div>
            <hr className={styles.divider} />
            <div className={styles.statItem}>
                <div className={styles.statTitle}>Rank</div>
                <p className={styles.statValue}>{rank}</p>
            </div>
        </div>
    );
};

const Badge = ({status}) => {
    return (
    <div className={styles.statsCard}>
        <div className={styles.statItem}>
            <div className={styles.statTitle}>Badges</div>    
        </div>
        <div className={styles.badges}>
            <img src=
                {!status ? "/images/badge1.png"
                    : status==="starter" ? "/images/badge2.png" 
                    : status==="mediocre" ? "/images/badge3.png"
                    : "/images/badge4.png"}
                alt="Badge Image" 
            />
        </div>
        <div className={styles.statTitle}>{status || "Registered"}</div>
        
    </div>
    );
};

const ProfileBio = ({ bio }) => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteMarksLeft}>
        <span className={styles.quoteMark}><BiSolidQuoteLeft/></span>
      </div>
      <p className={styles.quoteText}>
        {bio || "I love learning as well as playing."}
      </p>
      <div className={styles.quoteMarksRight}>
        <span className={styles.quoteMark}><BiSolidQuoteRight/></span>
      </div>
    </div>
  );
};
const ProfilePage = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className={styles.profilePage}>
            <ProfileHeader name={user.name} email={user.email} />
            <div className={styles.profileContent}>
                <StatsCard
                    totalQuestionsAttempted={320}
                    totalQuizesAttempted={30}
                    rank={1145}
                />
                <Badge status="starter" />
            </div>
            
            <ProfileBio bio="I love deals. The cheaper the better, I also never look for fancy accomodations." />
        </div>
    );
};

export default ProfilePage;
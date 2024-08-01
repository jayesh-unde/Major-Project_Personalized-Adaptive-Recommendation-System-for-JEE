// QuestionPage.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './QuestionPage.module.css';
import QuestionCard from '../../components/QuestionComponents/QuestionCard/QuestionCard';
import Navigation from '../../components/QuestionComponents/Navigation/Navigation';
import AnswerCard from '../../components/QuestionComponents/AnswerCard/AnswerCard';
import Footer from '../../components/QuestionComponents/Footer/Footer';

const QuestionPage = () => {
  const [dividerX, setDividerX] = useState(window.innerWidth / 2);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);
  const dividerRef = useRef(null);

  const minCardWidth = 300; // Adjust based on the width of the QuestionCard

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newDividerX = e.clientX - containerRect.left;

        if (newDividerX < minCardWidth) {
          setDividerX(minCardWidth);
        } else if (newDividerX > containerRect.width - minCardWidth) {
          setDividerX(containerRect.width - minCardWidth);
        } else {
          setDividerX(newDividerX);
        }
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  return (
    <div className={styles.layoutContainer} ref={containerRef}>
      <div className={styles.topDiv}><Navigation/></div>
      <div className={styles.contentContainer}>
        <div className={styles.questions} style={{ width: dividerX }}>
          <QuestionCard />
        </div>
        <div className={styles.divider} ref={dividerRef} style={{ left: dividerX }} onMouseDown={handleMouseDown}></div>
        <div className={styles.answers} style={{ width: `calc(100% - ${dividerX}px - 3px)` }}>
          <div className={styles.answersContent}>
            <AnswerCard/>
          </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default QuestionPage;

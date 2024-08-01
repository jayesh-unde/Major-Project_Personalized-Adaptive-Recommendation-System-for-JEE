// AnswerCard.js
import React from 'react';
import './AnswerCard.css';

const AnswerCard = () => {
  return (
    <div className="answer-card">
      <div className="answer-header">
        <h1>Choose the best options</h1>
      </div>
      <div className="answer-content">
        <div className="answer-option">
          <input type="radio" id="option1" name="option" />
          <label htmlFor="option1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, eius ea molestias </label>
        </div>
        <div className="answer-option">
          <input type="radio" id="option2" name="option" />
          <label htmlFor="option2">30 m</label>
        </div>
        <div className="answer-option">
          <input type="radio" id="option3" name="option" />
          <label htmlFor="option3">60 m</label>
        </div>
        <div className="answer-option">
          <input type="radio" id="option4" name="option" />
          <label htmlFor="option4">20 m</label>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;

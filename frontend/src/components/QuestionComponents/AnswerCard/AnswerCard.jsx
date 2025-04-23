import React from 'react';
import './AnswerCard.css';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const AnswerCard = ({ optionA, optionB, optionC, optionD, timer, selectedOption, onOptionChange }) => {
  const { hours, minutes, seconds } = timer;

  const handleOptionChange = (e) => {
    onOptionChange(e.target.value);
  };

  const renderLatexOption = (text) => {
    try {
      const parts = text.split(/(\$[^$]+\$)/g);
      return parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          const cleanText = part.slice(1, -1);
          return <InlineMath key={index} math={cleanText} />;
        } else if (part.trim()) {
          return <span key={index}>{part}</span>;
        }
        return null;
      });
    } catch (error) {
      console.error('LaTeX parsing error:', error);
      return <span>{text}</span>;
    }
  };

  return (
    <div className="answer-card">
      <div className="answer-header">
        <h1>Choose the best option</h1>
        <div className="timer">
          <span className="timer-icon">⏱</span>
          <span className="timer-text">
            {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
          </span>
        </div>
      </div>
      <div className="answer-content">
        <div className="answer-option">
          <input
            type="radio"
            id="option1"
            name="option"
            value="A"
            checked={selectedOption === 'A'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option1">{renderLatexOption(optionA)}</label>
        </div>
        <div className="answer-option">
          <input
            type="radio"
            id="option2"
            name="option"
            value="B"
            checked={selectedOption === 'B'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option2">{renderLatexOption(optionB)}</label>
        </div>
        <div className="answer-option">
          <input
            type="radio"
            id="option3"
            name="option"
            value="C"
            checked={selectedOption === 'C'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option3">{renderLatexOption(optionC)}</label>
        </div>
        <div className="answer-option">
          <input
            type="radio"
            id="option4"
            name="option"
            value="D"
            checked={selectedOption === 'D'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option4">{renderLatexOption(optionD)}</label>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;

import React, { useState } from 'react';
import './QuestionCard.css';
import flagIcon from '/images/flag-icon.png';
import noteIcon from '/images/note-icon.png';
import Note from '../Note/Note';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const difficultyStyles = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
};

const QuestionCard = ({ description, difficulty }) => {
  const [showNote, setShowNote] = useState(false);

  const handleNoteClick = () => {
    setShowNote(true);
  };

  const handleCloseNote = () => {
    setShowNote(false);
  };

  const renderLatex = (text) => {
    try {
      // Split text into parts that are LaTeX (enclosed in $) and regular text
      const parts = text.split(/(\$[^$]+\$)/g);
      
      return parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          // Remove the $ symbols and render as LaTeX
          const cleanText = part.slice(1, -1);
          return <InlineMath key={index} math={cleanText} />;
        } else if (part.trim()) {
          // Render regular text, preserving line breaks
          return part.split('\\').map((line, lineIndex) => (
            <React.Fragment key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < part.split('\\').length - 1 && <br />}
            </React.Fragment>
          ));
        }
        return null;
      });
    } catch (error) {
      console.error('LaTeX parsing error:', error);
      return <p>{text}</p>;
    }
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <h1>Kinematics</h1>
        <div className="question-icons">
          <span className={`difficulty-tag ${difficultyStyles[difficulty]}`}>
            {difficulty}
          </span>
          <img src={noteIcon} alt="Note Icon" onClick={handleNoteClick} />
          <img src={flagIcon} alt="Flag Icon" />
        </div>
      </div>
      <div className="question-content">
        {renderLatex(description)}
      </div>
      {showNote && <Note onClose={handleCloseNote} />}
    </div>
  );
};

export default QuestionCard;

import React, { useState } from 'react';
import './QuestionCard.css';
import flagIcon from '/images/flag-icon.png';
import noteIcon from '/images/note-icon.png';
import Note from '../Note/Note';

const QuestionCard = () => {
  const [showNote, setShowNote] = useState(false);

  const handleNoteClick = () => {
    setShowNote(true);
  };

  const handleCloseNote = () => {
    setShowNote(false);
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <h1>Kinematics</h1>
        <div className="question-icons">
          <img src={noteIcon} alt="Note Icon" onClick={handleNoteClick} />
          <img src={flagIcon} alt="Flag Icon" />
        </div>
      </div>
      <div className="question-content">
        <p>
          A piece of wood of mass 0.03 kg is dropped from the top of a 100 m height building. 
          Find the height at which the kinetic energy of the wood is equal to the potential energy.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae quibusdam eligendi neque consequuntur asperiores in nemo placeat officiis dicta commodi amet deleniti eveniet, sint ea culpa aspernatur quis dolore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatum nam assumenda illum id hic eaque corrupti veritatis distinctio numquam aperiam, inventore et veniam quod dicta, aliquam quidem omnis itaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut ducimus earum ipsa eaque labore facere totam sapiente itaque quae molestias cumque alias sed tempora nihil voluptates velit, ipsam fugit.
        </p>
      </div>
      {showNote && <Note onClose={handleCloseNote} />}
    </div>
  );
};

export default QuestionCard;

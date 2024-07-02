import React from 'react';
import SplitFlapCell from './SplitFlapCell';
import './SplitFlapDisplay.css';

const SplitFlapDisplay = ({ message, rows, cols, fgColor, upperColor, lowerColor  }) => {
  const generateCells = () => {
    let cells = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const charIndex = row * cols + col;
        const char = charIndex < message.length ? message[charIndex] : ' ';
        cells.push(<SplitFlapCell key={`${row}-${col}`} character={char} fgColor={fgColor} upperColor={upperColor} lowerColor={lowerColor } />);
      }
    }
    return cells;
  };

  return (
    <>
    <div className="split-flap-display">
      {generateCells()}
    </div>
     <div>
     <style>
        {` @keyframes flip2 {
         0% {
           transform: rotateX(-90deg);
         }
         50% {
           transform: rotateX(-90deg);
         }
         100% {
           transform: rotateX(0deg);
           background-color: ${upperColor? upperColor: 'rgb(255,255,255)'};
         }
         }
         @keyframes flip1 {
         0% {
           transform: rotateX(0deg);
           background-color: ${lowerColor? lowerColor: 'rgb(255,255,255)'};
         }
         50% {
           transform: rotateX(90deg);
           background-color:  ${lowerColor? lowerColor: '#000'};
         }
         100% {
           transform: rotateX(90deg);
         }
         }
         `}
     </style>
   </div>
   </>
  );
};

export default SplitFlapDisplay;

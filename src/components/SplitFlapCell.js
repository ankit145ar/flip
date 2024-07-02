import React, { useState, useEffect } from 'react';
import './SplitFlapCell.css';

const SplitFlapCell = ({ character, fgColor, upperColor, lowerColor }) => {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ-=!?.:/;,()&%$'0123456789";
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isFlip,setFlip] = useState(0);

  useEffect(() => {
    const targetIndex = alphabet.indexOf(character);

    if (targetIndex === -1) {
      console.error(`Character '${character}' is not supported in the alphabet.`);
      return;
    }

    const flipCharacters = (currentIndex) => {
      setTimeout(() => {
        if (currentIndex !== targetIndex) {
          setCurrentCharIndex((currentIndex + 1) % alphabet.length);
          flipCharacters((currentIndex + 1) % alphabet.length);
          setFlip(1);
        }
        else{
          setFlip(0)
        }
      }, 500);
    };

    flipCharacters(currentCharIndex);

    return () => {
    };
  }, [character, alphabet, currentCharIndex]);

  return (
    // <div className="split-flap-cell">
    //   <div className="front">{alphabet[currentCharIndex]}</div>
    //   <div className="back">{alphabet[(currentCharIndex + 1) % alphabet.length]}</div>
    // </div>
    <>
    <div className="splitflap" style={{color:fgColor}}>
        <div className="front-top" style={{background: upperColor}}>{alphabet[(currentCharIndex ) % alphabet.length]}</div>
        <div className={`front-full flip1 ${isFlip?'active':''}`}>{alphabet[(currentCharIndex) % alphabet.length]}</div>
        <div className={`back-top flip2  ${isFlip?'active':''}`}>{alphabet[currentCharIndex]}</div>
        <div className="back-full" style={{background: lowerColor}}>{alphabet[currentCharIndex]}</div>
    </div>
   
    </>
  );
};

export default SplitFlapCell;

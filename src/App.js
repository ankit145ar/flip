import React, { useState, useEffect } from 'react';
import SplitFlapDisplay from './components/SplitFlapDisplay';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [colors, setColors] = useState({
    bgColor: '',
    fgColor: '',
    upperColor: '',
    lowerColor: '',
  });

  const handleMessageChange = (event) => {
    setMessage(event.target.value.toUpperCase());
  };

  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setColors((prevColors) => ({
      ...prevColors,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      const cellWidth = 50;
      const cellHeight = 70;
      setCols(Math.floor(window.innerWidth / cellWidth));
      setRows(Math.floor(window.innerHeight / cellHeight));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <input type="text" value={message} onChange={handleMessageChange} placeholder='Enter Text'/>
      <div style={{display:'flex'}}>
        <div>
          <input 
            type="text" 
            name="bgColor" 
            placeholder="Enter background color" 
            value={colors.bgColor} 
            onChange={handleColorChange} 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="fgColor" 
            placeholder="Enter foreground color" 
            value={colors.fgColor} 
            onChange={handleColorChange} 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="upperColor" 
            placeholder="Enter upper color" 
            value={colors.upperColor} 
            onChange={handleColorChange} 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="lowerColor" 
            placeholder="Enter lower color" 
            value={colors.lowerColor} 
            onChange={handleColorChange} 
          />
        </div>
      </div>
      <div className="display-container" style={{ backgroundColor: colors.bgColor }}>
        <SplitFlapDisplay 
          message={message} 
          rows={rows} 
          cols={cols} 
          fgColor={colors.fgColor}
          upperColor={colors.upperColor}
          lowerColor={colors.lowerColor}
        />
      </div>
    </div>
  );
};

export default App;

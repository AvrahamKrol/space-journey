import { useState } from 'react';
import './index.css';

const CrewNavBtn = ({ crewLength, onSelectedId }) => {
  const [isActive, setIsActive] = useState(0);

  const activateHandler = (event) => {
    const id = event.target.id;

    setIsActive(id);
    onSelectedId(id)
  };

  const btnsJSX = [];
  for (let i = 0; i < crewLength; i++) {
    btnsJSX[i] = (
      <button
        key={i}
        id={i}
        className={`crewBtn ${+isActive === i ? 'crew-active' : ''}`}
        onClick={activateHandler}
      ></button>
    );
  }
  
  return btnsJSX;
};

export default CrewNavBtn;

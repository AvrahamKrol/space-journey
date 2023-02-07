import './index.css';
import { useState } from 'react';

const TechNavBtn = ({ crewLength, onSelectedId }) => {
  const [isActive, setIsActive] = useState(0);

  const activateHandler = (event) => {
    const id = event.target.id;

    setIsActive(id);
    onSelectedId(id);
  };

  const btnsJSX = [];
  for (let i = 0; i < crewLength; i++) {
    let value = i;
    btnsJSX[i] = (
      <button
        key={i}
        id={i}
        className={`techBtn ${+isActive === i ? 'tech-active' : ''}`}
        onClick={activateHandler}
      >
        {(value += 1)}
      </button>
    );
  }

  return btnsJSX;
};

export default TechNavBtn;

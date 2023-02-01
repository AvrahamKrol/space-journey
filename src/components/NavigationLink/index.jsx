import './index.css';
import { useState } from 'react';

const NavigationLink = ({ planets, onSelectPlanet }) => {
  const [active, setActive] = useState('MOON');

  const activateHandler = (event) => {
    const btnText = event.target.innerText;

    if (active !== btnText) {
      setActive(btnText);
      onSelectPlanet(btnText);
    }
  };
  
  return planets.map((planet, id) => (
    <button
      key={id}
      onClick={activateHandler}
      className={
        active === planet.toUpperCase()
          ? 'destination-btn destination-active'
          : 'destination-btn'
      }
    >
      {planet.toUpperCase()}
    </button>
  ));
};

export default NavigationLink;

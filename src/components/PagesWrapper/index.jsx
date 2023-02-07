import './index.css';
import TechBackgroundDesc from '../../assets/technology/background-technology-desktop.jpg';
import DestBackgroundDesc from '../../assets/destination/background-destination-desktop.jpg';
import CrewBackgroundDesc from '../../assets/crew/background-crew-desktop.jpg';
import TechBackgroundTab from '../../assets/technology/background-technology-tablet.jpg';
import DestBackgroundTab from '../../assets/destination/background-destination-tablet.jpg';
import CrewBackgroundTab from '../../assets/crew/background-crew-tablet.jpg';
import TechBackgroundMob from '../../assets/technology/background-technology-mobile.jpg';
import DestBackgroundMob from '../../assets/destination/background-destination-mobile.jpg';
import CrewBackgroundMob from '../../assets/crew/background-crew-mobile.jpg';

const PagesWrapper = ({ children, page }) => {
  let bgImage;
  console.log(page === 'dest' && window.innerWidth.toString() <= '768px');
  console.log(window.innerWidth.toString() <= '768px');
  if (page === 'dest' && window.innerWidth.toString() <= '375px') {
    bgImage = DestBackgroundMob;
  } else if (page === 'crew' && window.innerWidth.toString() <= '375px') {
    bgImage = CrewBackgroundMob;
  } else if (page === 'tech' && window.innerWidth.toString() <= '375px') {
    bgImage = TechBackgroundMob;
  } else if (page === 'dest' && window.innerWidth.toString() <= '768px') {
    bgImage = DestBackgroundTab;
  } else if (page === 'crew' && window.innerWidth.toString() <= '768px') {
    bgImage = CrewBackgroundTab;
  } else if (page === 'tech' && window.innerWidth.toString() <= '768px') {
    bgImage = TechBackgroundTab;
  } else if (page === 'dest') {
    bgImage = DestBackgroundDesc;
  } else if (page === 'crew') {
    bgImage = CrewBackgroundDesc;
  } else bgImage = TechBackgroundDesc;

  return (
    <main
      className="main"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="blur"></div>
      {children}
    </main>
  );
};

export default PagesWrapper;

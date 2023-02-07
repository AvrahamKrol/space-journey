import './index.css';
import TechBackgroundDesc from '../../assets/technology/background-technology-desktop.jpg';
import DestBackgroundDesc from '../../assets/destination/background-destination-desktop.jpg';
import CrewBackgroundDesc from '../../assets/crew/background-crew-desktop.jpg';
import TechBackgroundTab from '../../assets/crew/background-crew-tablet.jpg';
import DestBackgroundTab from '../../assets/crew/background-crew-tablet.jpg';
import CrewBackgroundTab from '../../assets/crew/background-crew-tablet.jpg';
import TechBackgroundMob from '../../assets/technology/background-technology-mobile.jpg';
import DestBackgroundMob from '../../assets/destination/background-destination-mobile.jpg';
import CrewBackgroundMob from '../../assets/crew/background-crew-mobile.jpg';

const PagesWrapper = ({ children, page }) => {
  let bgImage;

  if (page === 'dest' && window.innerWidth <= '375px') {
    bgImage = DestBackgroundMob;
  } else if (page === 'crew' && window.innerWidth <= '375px') {
    bgImage = CrewBackgroundMob;
  } else if (page === 'tech' && window.innerWidth <= '375px') {
    bgImage = TechBackgroundMob;
  }else if (page === 'dest' && window.innerWidth <= '768px') {
    bgImage = DestBackgroundTab;
  } else if (page === 'crew' && window.innerWidth <= '768px') {
    bgImage = CrewBackgroundTab;
  } else if (page === 'tech' && window.innerWidth <= '768px') {
    bgImage = TechBackgroundTab;
  }else if (page === 'dest') {
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

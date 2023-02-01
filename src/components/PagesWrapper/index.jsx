import './index.css';
import TechBackground from '../../assets/technology/background-technology-desktop.jpg';
import DestBackground from '../../assets/destination/background-destination-desktop.jpg';
import CrewBackground from '../../assets/crew/background-crew-desktop.jpg';

const PagesWrapper = ({ children, page }) => {
  let bgImage;

  if (page === 'dest') {
    bgImage = DestBackground;
  } else if (page === 'crew') {
    bgImage = CrewBackground;
  } else bgImage = TechBackground;

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

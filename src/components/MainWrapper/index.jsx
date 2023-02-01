import './index.css';
import BackgroundHomeDesktop from '../../assets/home/background-home-desktop.jpg';

const MainWrapper = ({ children }) => {
  return (
    <main
      className="main"
      style={{
        backgroundImage: `url('${BackgroundHomeDesktop}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="blur"></div>
      {children}
    </main>
  );
};

export default MainWrapper;

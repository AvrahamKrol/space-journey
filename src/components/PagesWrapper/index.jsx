import './index.css';
import TechBackground from '../../assets/technology/background-technology-desktop.jpg';

const PagesWrapper = ({ children, isTech }) => {
  return (
    <main
      className="main"
      style={
        isTech
          ? {
              backgroundImage: `url('${TechBackground}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : { backgroundColor: '#0b0d17' }
      }
    >
      <div className="blur"></div>
      {children}
    </main>
  );
};

export default PagesWrapper;

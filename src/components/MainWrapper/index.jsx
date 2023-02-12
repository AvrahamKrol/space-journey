import './index.css';
import Modal from '../../components/ui/Modal';

const MainWrapper = ({ children, isModalActive, onCloseModal }) => {
  const isMobile = window.innerWidth <= 520;

  // const toggleStateHandler = () => {
  //   // if (isModalActive) {
  //   //   onCloseModal(false);
  //   // }
  // };
  return (
    <main className="main">
      {isMobile && (
        <Modal isModalActive={isModalActive} onCloseModal={onCloseModal} />
      )}
      <div className="blur"></div>
      {children}
    </main>
  );
};

export default MainWrapper;

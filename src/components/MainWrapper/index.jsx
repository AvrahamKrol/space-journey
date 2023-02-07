import './index.css';

const MainWrapper = ({ children }) => {
  return (
    <main className="main">
      <div className="blur"></div>
      {children}
    </main>
  );
};

export default MainWrapper;

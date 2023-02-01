import './index.css';
import MainBtn from '../../components/ui/MainBtn';


const Heading = () => {
  return (
    <div className="heading-container">
      <div className="info-container">
        <h5 className="hd-fs-xsm">So, you want to travel to</h5>
        <h1 className="hd-fs-xbg">Space</h1>
        <p className="text-fs">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="btn-container">
        <MainBtn />
      </div>
    </div>
  );
};

export default Heading;
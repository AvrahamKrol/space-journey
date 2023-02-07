import { Link } from 'react-router-dom';
import './index.css';

const MainBtn = () => {
  return (
    <Link to="/destination" className="main-btn">
      Explore
    </Link>
  );
};

export default MainBtn;

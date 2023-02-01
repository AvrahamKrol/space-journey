import './index.css';
import { NavLink } from 'react-router-dom';

import Logo from '../ui/Logo';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Logo width="48" height="48" />
      <div className="line"></div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              <span>00</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/destination"
            >
              <span>01</span>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/crew"
            >
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/technology"
            >
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

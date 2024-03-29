import './index.css';
import { NavLink } from 'react-router-dom';
import CloseIcon from '../Icons/CloseIcon';

const Modal = ({ isModalActive, onCloseModal }) => {
  return (
    <section
      className={isModalActive ? 'modal-nav modal-nav-active' : 'modal-nav'}
    >
      <CloseIcon onCloseModal={onCloseModal} />
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
    </section>
  );
};

export default Modal;

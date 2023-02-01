import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechPage from './pages/technology';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechPage />} />
    </Routes>
  );
}

export default App;
/* 
(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechPage from './pages/TechnologyPage';
import data from './data.json';

function App() {
  return (
    <Routes>
      <Route path="/space-journey" element={<HomePage />} />
      <Route
        path="/space-journey/destination"
        element={<DestinationPage destinations={data.destinations} />}
      />
      <Route
        path="/space-journey/crew"
        element={<CrewPage crewMembers={data.crew} />}
      />
      <Route
        path="/space-journey/technology"
        element={<TechPage techs={data.technology} />}
      />
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

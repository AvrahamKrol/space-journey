import { useContext } from 'react';
import PagesWrapper from '../../components/PagesWrapper';
import Navigation from '../../components/Navigation';
import obj from '../../data.json';
import DestinationSection from '../../components/sections/DestinationSection';

import { Context } from '../../lib/Context/SelectedContext';

const DestinationPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useContext(Context);
  const { destinations } = obj;
  const navNames = destinations.map((destination) => destination.name);
  const selectedDestination = destinations.find(
    (destination) => destination.name.toUpperCase() === selectedPlanet
  );
  return (
    <PagesWrapper>
      <Navigation />
      <DestinationSection
        destination={(destinations && selectedDestination) || destinations[0]}
        navNames={navNames}
        onSelectPlanet={setSelectedPlanet}
      />
    </PagesWrapper>
  );
};

export default DestinationPage;

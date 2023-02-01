import { useContext, useEffect } from 'react';
import PagesWrapper from '../../components/PagesWrapper';
import Navigation from '../../components/Navigation';
import DestinationSection from '../../components/sections/DestinationSection';

import { Context } from '../../lib/Context/SelectedContext';

const DestinationPage = ({destinations}) => {
  const [selectedPlanet, setSelectedPlanet] = useContext(Context);

  useEffect(() => {
    setSelectedPlanet('MOON');
  }, []);

  const navNames = destinations.map((destination) => destination.name);
  const selectedDestination = destinations.find(
    (destination) => destination.name.toUpperCase() === selectedPlanet
  );
  return (
    <PagesWrapper page='dest'>
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

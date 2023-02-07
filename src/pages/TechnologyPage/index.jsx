import { useContext } from 'react';
import { Context } from '../../lib/Context/SelectedContext';
import PagesWrapper from '../../components/PagesWrapper';
import Navigation from '../../components/Navigation';
import TechSection from '../../components/sections/TechSection';
const TechPage = ({techs}) => {
  const [selectedTech, setSelectedTech] = useContext(Context);
  const technology =
    techs.find((member, index) => +selectedTech === index) || techs[0];

  return (
    <PagesWrapper page="tech">
      <Navigation />
      <TechSection tech={technology} onSelectTech={setSelectedTech} techLength={techs.length} />
    </PagesWrapper>
  );
};

export default TechPage;

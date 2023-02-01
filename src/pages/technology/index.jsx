import PagesWrapper from '../../components/PagesWrapper';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

const TechPage = () => {
  return (
    <PagesWrapper isTech={true}>
      <Navigation />
      <Heading />
    </PagesWrapper>
  );
};

export default TechPage;

import { useState } from 'react';

import MainWrapper from '../../components/MainWrapper';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

const HomePage = () => {
  const [isModalActive, setIsActive] = useState(false);
  const toggleState = (status) => {
    setIsActive(status);
  }
  
  return (
    <MainWrapper isModalActive={isModalActive} onCloseModal={toggleState}>
      <Navigation onOpenModal={toggleState} />
      <Heading />
    </MainWrapper>
  );
};

export default HomePage;

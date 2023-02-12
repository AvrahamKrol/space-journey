import { useContext, useState } from 'react';
import PagesWrapper from '../../components/PagesWrapper';
import Navigation from '../../components/Navigation';
import CrewSection from '../../components/sections/CrewSection';
import { Context } from '../../lib/Context/SelectedContext';

const CrewPage = ({ crewMembers }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const toggleState = (status) => {
    setIsModalActive(status);
  };
  const [selectedMemberId, setSelectedMemberId] = useContext(Context);
  const crewMember =
    crewMembers.find((member, index) => +selectedMemberId === index) ||
    crewMembers[0];

  return (
    <PagesWrapper
      page="crew"
      isModalActive={isModalActive}
      onCloseModal={toggleState}
    >
      <Navigation onOpenModal={toggleState} />
      <CrewSection
        crewMember={crewMember}
        onSelectedId={setSelectedMemberId}
        crewLength={crewMembers.length}
      />
    </PagesWrapper>
  );
};

export default CrewPage;

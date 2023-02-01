import './index.css';

//Components
// import Image from '../../ui/Image';
import CrewNavBtn from '../../ui/CrewNavBtn';

const CrewSection = ({onSelectedId, crewMember, crewLength}) => {
  const {role, name, bio, image} = crewMember

  return (
    <section className="sections-container">
      <section className="sections-container--left">
        <h3 className="sections-heading">
          <span>02</span>
          Meet your crew
        </h3>
        <div className="crew-details">
          <h4 className="crew-details__sub-heading">{role.toUpperCase()}</h4>
          <h3 className="crew-details__heading">{name.toUpperCase()}</h3>
          <p className="crew-details__details">{bio} </p>
          <div className="crew-navigation">
            <CrewNavBtn onSelectedId={onSelectedId} crewLength={crewLength} />
          </div>
        </div>
      </section>
      <section className="sections-container--right"></section>
    </section>
  );
};

export default CrewSection;

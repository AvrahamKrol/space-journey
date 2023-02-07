import './index.css';

//Components
import CrewNavBtn from '../../ui/CrewNavBtn';
import { CrewImage } from '../../ui/Images';

const CrewSection = ({ onSelectedId, crewMember, crewLength }) => {
  const { role, name, bio, images } = crewMember;

  return (
    <section className="crew-container">
      <section className="crew-container--left">
        <h3 className="crew-heading">
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
      <section className="crew-container--right">
        <CrewImage imageSrc={images.png} name={name} />
      </section>
    </section>
  );
};

export default CrewSection;

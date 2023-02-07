import './index.css';

//Components
import TechNavBtn from '../../ui/TechNavBtn';
import { TechImage } from '../../ui/Images';

const TechSection = ({ onSelectTech, tech, crewLength }) => {
  return (
    <section className="tech-container">
      <section className="tech-container--left">
        <h3 className="tech-heading">
          <span>03</span>
          SPACE LAUNCH 101
        </h3>
        <div className="tech-details">
          <div className="tech-details__tech-navigation">
            <TechNavBtn onSelectedId={onSelectTech} crewLength={3} />
          </div>
          <div className="tech-details__details-container">
            <h4 className="tech-details__sub-heading">THE TERMINOLOGY…</h4>
            <h3 className="tech-details__heading">{tech.name}</h3>
            <p className="tech-details__details">{tech.description}</p>
          </div>
        </div>
      </section>
      <section className="tech-container--right">
        <TechImage imageSrc={tech.images.portrait} name={tech.name} />
      </section>
    </section>
  );
};

export default TechSection;

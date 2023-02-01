import './index.css';
import NavigationLink from '../../NavigationLink';
import Image from '../../ui/Image';

const DestinationSection = ({ destination, navNames, onSelectPlanet }) => {
  const pic = destination.images.png;
  return (
    <section className="sections-container">
      <section className="sections-container--left">
        <h3 className="sections-heading">
          <span>01</span>
          Pick your destination
        </h3>
        <div className="destination-image">
          <Image imageSrc={pic} name={destination.name} />
        </div>
      </section>
      <section className="sections-container--right">
        <NavigationLink planets={navNames} onSelectPlanet={onSelectPlanet} />
        <div className="destination-description">
          <h2 className="dest-heading">{destination.name.toUpperCase()}</h2>
          <p className="dest-description">{destination.description}</p>
        </div>
        <div className="destination-details">
          <div className="destination-details--left">
            <h5 className="sb-fs-md">AVG. DISTANCE</h5>
            <p className="distance">{destination.distance}</p>
          </div>
          <div className="destination-details--right">
            <h5 className="sb-fs-md">Est. travel time</h5>
            <p className="distance">{destination.travel}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DestinationSection;

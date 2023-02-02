// import './index.css';

export const CrewImage = ({ imageSrc, name }) => {
  const specialist = '../../../../assets/crew/image-mark-shuttleworth.png';
  const pilot = '../../../../assets/crew/image-victor-glover.png';
  const engineer = '../../../../assets/crew/image-anousheh-ansari.png';
  let img;

  switch (true) {
    case specialist.includes(imageSrc):
      img = require('../../../../assets/crew/image-mark-shuttleworth.png');
      break;
    case pilot.includes(imageSrc):
      img = require('../../../../assets/crew/image-victor-glover.png');
      break;
    case engineer.includes(imageSrc):
      img = require('../../../../assets/crew/image-anousheh-ansari.png');
      break;
    default:
      img = require('../../../../assets/crew/image-douglas-hurley.png');
  }

  return <img className="image" src={img} alt={name} />;
};

export const TechImage = ({ imageSrc, name }) => {
  const spaceport =
    '../../../../assets/technology/image-spaceport-portrait.jpg';
  const spaceCapsule =
    '../../../../assets/technology/image-space-capsule-portrait.jpg';
  let img;

  switch (true) {
    case spaceport.includes(imageSrc):
      img = require('../../../../assets/technology/image-spaceport-portrait.jpg');
      break;
    case spaceCapsule.includes(imageSrc):
      img = require('../../../../assets/technology/image-space-capsule-portrait.jpg');
      break;
    default:
      img = require('../../../../assets/technology/image-launch-vehicle-portrait.jpg');
  }

  return <img className="image" src={img} alt={name} />;
};

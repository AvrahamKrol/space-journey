export const TechImage = ({ imageSrc, name }) => {
  const spaceportPortrait =
    '../../../../assets/technology/image-spaceport-portrait.jpg';
  const spaceCapsulePortrait =
    '../../../../assets/technology/image-space-capsule-portrait.jpg';
  const spaceportLandscape =
    '../../../../assets/technology/image-spaceport-landscape.jpg';
  const spaceCapsuleLandscape =
    '../../../../assets/technology/image-space-capsule-landscape.jpg';
  const launchVehicleLandscape =
    '../../../../assets/technology/image-launch-vehicle-landscape.jpg';
  let img;

  switch (true) {
    case spaceportLandscape.includes(imageSrc):
      img = require('../../../../assets/technology/image-spaceport-landscape.jpg');
      break;
    case spaceCapsuleLandscape.includes(imageSrc):
      img = require('../../../../assets/technology/image-space-capsule-landscape.jpg');
      break;
    case launchVehicleLandscape.includes(imageSrc):
      img = require('../../../../assets/technology/image-launch-vehicle-landscape.jpg');
      break;
    case spaceportPortrait.includes(imageSrc):
      img = require('../../../../assets/technology/image-spaceport-portrait.jpg');
      break;
    case spaceCapsulePortrait.includes(imageSrc):
      img = require('../../../../assets/technology/image-space-capsule-portrait.jpg');
      break;
    default:
      img = require('../../../../assets/technology/image-launch-vehicle-portrait.jpg');
  }

  return <img className="image" src={img} alt={name} />;
};

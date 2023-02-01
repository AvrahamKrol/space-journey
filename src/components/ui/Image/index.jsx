import './index.css';

const Image = ({ imageSrc, name }) => {
  const moonImg = '../../../assets/destination/image-moon.png';
  const marsImg = '../../../assets/destination/image-mars.png';
  const europeImg = '../../../assets/destination/image-europa.png';
  const titanImg = '../../../assets/destination/image-titan.png';
  let img;

  switch (true) {
    case marsImg.includes(imageSrc):
      img = require('../../../assets/destination/image-mars.png');
      break;
    case europeImg.includes(imageSrc):
      img = require('../../../assets/destination/image-europa.png');
      break;
    case titanImg.includes(imageSrc):
      img = require('../../../assets/destination/image-titan.png');
      break;
    default:
      img = require('../../../assets/destination/image-moon.png');
  }

  return <img className="image" src={img} alt={name} />;
};

export default Image;

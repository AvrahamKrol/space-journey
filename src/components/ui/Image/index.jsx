import './index.css';

const Image = ({ imageSrc, name }) => {
  return <img className="image" src={imageSrc} alt={name} />;
};

export default Image;

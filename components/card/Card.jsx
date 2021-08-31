import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardTags from "./CardTags";

const Card = ({ image }) => {
  return (
    <div className="shadow-md rounded-lg  transition duration-700 ease pb-1">
      <CardImage />
      <div className="relative bg-white z-20 p-4">
        <CardBody />
        <CardTags />
      </div>
    </div>
  );
};

export default Card;

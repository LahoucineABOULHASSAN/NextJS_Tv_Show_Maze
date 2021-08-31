import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardTags from "./CardTags";

const Card = ({ show }) => {
  const { name, image, url, status, genres, summary } = show;

  return (
    <div className="shadow-md rounded-lg  transition duration-700 ease pb-1">
      <CardImage name={name} image={image.original} url={url} />
      <div className="relative bg-white z-20 p-4">
        <CardHeader name={name} status={status} />
        <CardTags tags={genres} />
        {/* <CardBody /> */}
      </div>
    </div>
  );
};

export default Card;

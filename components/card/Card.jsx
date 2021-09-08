import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardTags from "./CardTags";

const Card = ({ show }) => {
  const { id, name, image, status, genres, rating } = show;

  return (
    <div className="shadow-md transition duration-700 ease-in-out">
      <CardImage
        name={name}
        image={image.original}
        url={`/series/${id}`}
        rating={rating.average}
      />
      <div className="relative bg-white z-20 p-4">
        <CardHeader name={name} status={status} />
        <CardTags tags={genres} />
      </div>
    </div>
  );
};

export default Card;

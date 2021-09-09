import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardTags from "./CardTags";

const Card = ({ show }) => {
  return (
    show && (
      <div className="shadow-md transition duration-700 ease-in-out">
        {show && (
          <>
            <CardImage
              name={show.name}
              image={show.image.original}
              url={`/series/${show.id}`}
              rating={show.rating.average}
            />
            <div className="relative bg-white z-20 p-4">
              <CardHeader name={show.name} status={show.status} />
              <CardTags tags={show.genres} />
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Card;

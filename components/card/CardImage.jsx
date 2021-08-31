import CardHeader from "./CardHeader";

const CardImage = () => {
  return (
    <div className="relative image-header">
      <a href={image.largeImageURL} target="_blank">
        <img className="w-full rounded-t-lg" src="" alt="" />
      </a>
      <CardHeader />
    </div>
  );
};

export default CardImage;

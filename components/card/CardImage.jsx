const CardImage = ({ image, url, name }) => {
  return (
    <div className="relative image-header">
      <a href={url} target="_blank">
        <img className="w-full h-full rounded-t-lg" src={image} alt={name} />
      </a>
    </div>
  );
};

export default CardImage;

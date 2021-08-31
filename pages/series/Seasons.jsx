const Seasons = ({ name, seasons }) => {
  return (
    <div className="w-10/12 mx-auto my-8">
      <h1 className="text-2xl text-green-500 font-bold my-4 ">Seasons</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {seasons.map((season) => (
          <li key={season.id}>
            <a href={season.url}>
              <img
                src={season.image.original}
                alt={`${name}-season-${season.number}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seasons;

const CastAndCrew = ({ castandcrew }) => {
  return (
    <div className="w-full bg-gray-300 p-8">
      <h1 className="text-2xl text-green-700 font-semibold mb-4">
        {"Cast & Crew"}
      </h1>
      <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 gap-4 lg:grdi-cols-12">
        {castandcrew.map((item, index) => (
          <li key={index} className="flex flex-col items-center text-center">
            <a href={item.url}>
              <img
                className="rounded-full h-24 w-24 mb-2"
                src={item.character.image.medium}
                alt={item.character.name}
              />
            </a>
            <h2 className="text-sm font-semibold text-gray-700">
              {item.person.name}
            </h2>
            <h3 className="text-xs text-gray-500">
              {item.character.name.split("/")[0]}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastAndCrew;

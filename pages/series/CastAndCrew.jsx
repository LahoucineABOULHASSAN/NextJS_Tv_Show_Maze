const CastAndCrew = ({ castandcrew }) => {
  return (
    <div className="w-10/12 mx-auto my-8">
      <h1 className="text-2xl text-green-500 font-bold my-4 ">
        {"Cast & Crew"}
      </h1>
      <ul className="flex flex-row items-center justify-between flex-wrap">
        {castandcrew.map((item, index) => (
          <li key={index} className=" mr-2">
            <a href={item.url}>
              <img
                className="rounded-full h-24 w-24"
                src={item.character.image.medium}
                alt={item.character.name}
              />
            </a>
            <h2 className="text-md text-gray-600">{item.person.name}</h2>
            <h3 className="text-sm text-gray-400">{item.character.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastAndCrew;

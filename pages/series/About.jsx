import { getFontDefinitionFromNetwork } from "next/dist/server/font-utils";
import CardTags from "../../components/card/CardTags";

const About = ({ show }) => {
  const {
    name,
    genres,
    summary,
    status,
    rating,
    premiered,
    language,
    network,
  } = show;
  return (
    <div className="w-10/12 mx-auto my-8">
      <h1 className="text-2xl text-green-500 font-bold my-4">About {name}</h1>
      <div className="rounded-lg bg-gray-300 py-2 px-4">
        <div>{rating.average}/10</div>
        <CardTags tags={genres} />
        <div>{summary}</div>
      </div>
      <h2 className="text-xl text-gray-500 font-semibold my-4">More Details</h2>
      <div className="ml-4">
        <div>Status: {status}</div>
        <div>Premiered: {premiered}</div>
        <div>Language: {language}</div>
        <div>Network : {network.name}</div>
        <div>Country : {network.country.name}</div>
      </div>
    </div>
  );
};

export default About;

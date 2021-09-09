import parse from "html-react-parser";
const AboutDetails = ({ show }) => {
  return (
    show && (
      <>
        <h1 className="text-2xl text-green-500 font-semibold mb-4">About</h1>
        <div className="rounded-lg text-sm text-gray-400 bg-gray-700 p-4">
          <h3 className="text-lg text-gray-300 font-bold uppercase">
            {show.name}
          </h3>
          <h4 className="mb-4">{show.status}</h4>
          <p className="text-justify leading-6">{parse(show.summary)}</p>
        </div>
      </>
    )
  );
};

export default AboutDetails;

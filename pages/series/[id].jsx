import Seasons from "./Seasons";
import CastAndCrew from "./CastAndCrew";
import About from "./About";

const URL = "https://api.tvmaze.com/shows";

export const getStaticPaths = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const paths = data.map((show) => {
    return {
      params: { id: show.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  // fetch single show
  const showRes = await fetch(`${URL}/${id}`);
  const show = await showRes.json();

  // fetch seasons
  const seasonsRes = await fetch(`${URL}/${id}/seasons`);
  const seasons = await seasonsRes.json();

  // fetch cast
  const castandcrewRes = await fetch(`${URL}/${id}/cast`);
  const castandcrew = await castandcrewRes.json();

  return {
    props: { show, seasons, castandcrew },
  };
};

const Serie = ({ show, seasons, castandcrew }) => {
  const { name, image } = show;
  return (
    <section>
      <div>
        <img className="w-screen h-screen" src={image.original} alt={name} />
      </div>
      <Seasons name={name} seasons={seasons} />
      <CastAndCrew castandcrew={castandcrew} />
      <About show={show} />
    </section>
  );
};

export default Serie;

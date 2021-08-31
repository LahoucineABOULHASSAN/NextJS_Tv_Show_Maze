import { Card } from "../../components";
const Series = ({ shows }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-10/12 my-12 mx-auto">
        {shows.map((show) => (
          <Card show={show} key={show.id} />
        ))}
      </div>
    </section>
  );
};

export default Series;

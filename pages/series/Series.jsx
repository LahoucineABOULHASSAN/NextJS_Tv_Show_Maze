import Serie from "./Serie";
const Series = ({ series }) => {
  return (
    <section>
      {series.map((serie) => (
        <Serie serie={serie} key={serie.id} />
      ))}
    </section>
  );
};

export default Series;

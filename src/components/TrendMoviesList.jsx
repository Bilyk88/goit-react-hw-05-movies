import { TrendMovie } from './TrendMovie';

export const TrendMoviesList = ({ trendMovies }) => {
  return (
    <ul>
      {trendMovies.map(({ id, name, title }) => {
        return <TrendMovie key={id} name={name} title={title} id={id} />;
      })}
    </ul>
  );
};

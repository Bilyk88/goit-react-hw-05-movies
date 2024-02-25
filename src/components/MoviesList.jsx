import { Movie } from 'components/Movie';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <Movie key={id} title={title} id={id} />;
      })}
    </ul>
  );
};

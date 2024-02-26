import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{name || title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

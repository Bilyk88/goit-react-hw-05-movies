import { Link } from 'react-router-dom';

export const TrendMovie = ({ id, name, title }) => {
  return (
    <li>
      <Link to="/movies/{id}">{name || title}</Link>
    </li>
  );
};

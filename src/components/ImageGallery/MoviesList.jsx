import { Movie } from 'components/ImageGalleryItem/Movie';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <Movie key={id} title={title} />;
      })}
    </ul>
  );
};

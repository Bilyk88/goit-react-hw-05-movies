import { fetchMovieById } from 'api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function getMovieById() {
      try {
        setIsLoading(true);
        setError(false);
        const searchResult = await fetchMovieById(params.movieId);
        console.log(searchResult);
        setMovie(searchResult);
      } catch (error) {
        setError(true);
        toast.error('Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieById();
  }, [params.movieId]);

  return (
    <div>
      {movie && <h1>{movie.title}</h1>}
      {isLoading && <Loader />}
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
    </ul>
      <Outlet/>
    </div>
  );
}

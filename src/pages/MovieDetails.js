import { fetchMovieById } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieCard } from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkRef = useRef(location);

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
      <Link to={backLinkRef.current.state?.from ?? '/' }>Go back</Link>
      {movie && (
        <MovieCard>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Movie poster"
          />
          <div>
            <h1>{movie.title}</h1>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <ul>
              <h2>Genres</h2>
              {movie.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </div>
        </MovieCard>
      )}
      {isLoading && <Loader />}
      <ul>
        <h3>Additional information</h3>

        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

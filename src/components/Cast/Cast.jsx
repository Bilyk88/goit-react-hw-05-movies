import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader } from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { CastCard } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        setIsLoading(true);
        setError(false);
        const searchResult = await fetchMovieCast(params.movieId);
        setCast(searchResult);
      } catch (error) {
        setError(true);
        toast.error('Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [params.movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <CastCard key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt="Profile"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </CastCard>
          );
        })}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
}

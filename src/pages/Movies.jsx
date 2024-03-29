import { fetchMovies } from 'api';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  // const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);
  const [params, setParams] = useSearchParams();

  const value = params.get('query');

  useEffect(() => {
    if (!value) {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const searchResult = await fetchMovies({ value });
        setMovies(searchResult);
      } catch (error) {
        setError(true);
        toast.error('Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [value]);

  const handleSubmit = newValue => {
    setParams({ query: newValue });
    setMovies([]);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </div>
  );
}

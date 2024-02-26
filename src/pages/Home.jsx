import { fetchTrendMovies } from "api";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const searchResult = await fetchTrendMovies();
        setTrendMovies(searchResult);
      } catch (error) {
        setError(true);
        toast.error('Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={trendMovies} />
      {isLoading && <Loader />}
    </div>);
}
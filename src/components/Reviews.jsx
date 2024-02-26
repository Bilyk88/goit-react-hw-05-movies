import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const searchResult = await fetchMovieReviews(params.movieId);
        setReviews(searchResult);
      } catch (error) {
        setError(true);
        toast.error('Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [params.movieId]);

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};

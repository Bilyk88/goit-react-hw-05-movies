import axios from 'axios';

export const fetchMovies = async ({value}) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=cbd83a324a45eb9670270e190650b893`
  );
  console.log(response.data.results);
  return response.data.results;
};

export const fetchTrendMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=cbd83a324a45eb9670270e190650b893`
  );
  console.log(response.data.results);
  return response.data.results;
};

import axios from "axios";

const BASE_URL = "https://api.potterdb.com";

const getMovies = async () => {
  const response = await axios.get(`${BASE_URL}/v1/movies`);
  return response.data;
};

const getMoviesDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/v1/movies/${movieId}`);
  return response.data;
};

const MovieService = {
  getMovies,
  getMoviesDetails,
};

export default MovieService;

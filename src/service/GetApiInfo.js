import axios from "axios";


const BASE_URL = "https://api.potterdb.com";

const getCharacters = async () => {
  const response = await axios.get(`${BASE_URL}/v1/characters`);
  return response.data;
}

const getCharactersByBook = async (bookId) => {

  const response = await axios.get(`${BASE_URL}/v1/books/${bookId}/chapters`);
  return response.data;
}

const getBooks = async () => {

  const response = await axios.get(`${BASE_URL}/v1/books`);
  return response.data;
}

const getMovies = async () => {

  const response = await axios.get(`${BASE_URL}/v1/movies`);
  return response.data;
}

const getMoviesDetails = async (movieId) => {

  const response = await axios.get(`${BASE_URL}/v1/movies/${movieId}`);
  return response.data;
}

const getPotions = async () => {

  const response = await axios.get(`${BASE_URL}/v1/potions`);
  return response.data;
}

const getPotionsInfo = async (potionId) => {

  const response = await axios.get(`${BASE_URL}/v1/potions/${potionId}`);
  return response.data;
}

const functions = {
  getCharacters,
  getCharactersByBook,
  getBooks,
  getMovies,
  getMoviesDetails,
  getPotions,
  getPotionsInfo
}
export default functions;
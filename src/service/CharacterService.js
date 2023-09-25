import axios from "axios";

const BASE_URL = "https://api.potterdb.com";

const getCharacters = async () => {
  const response = await axios.get(`${BASE_URL}/v1/characters`);
  return response.data;
};

const getCharactersByBook = async (bookId) => {
  const response = await axios.get(`${BASE_URL}/v1/books/${bookId}/chapters`);
  return response.data;
};

const getBooks = async () => {
  const response = await axios.get(`${BASE_URL}/v1/books`);
  return response.data;
};

const CharacterService = {
  getCharacters,
  getCharactersByBook,
  getBooks,
};
export default CharacterService;

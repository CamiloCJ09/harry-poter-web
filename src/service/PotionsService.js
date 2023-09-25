import axios from "axios";

const BASE_URL = "https://api.potterdb.com";

const getPotions = async () => {
  const response = await axios.get(`${BASE_URL}/v1/potions`);
  return response.data;
};

const getPotionsInfo = async (potionId) => {
  const response = await axios.get(`${BASE_URL}/v1/potions/${potionId}`);
  return response.data;
};

const PotionsService = {
  getPotions,
  getPotionsInfo,
};

export default PotionsService;

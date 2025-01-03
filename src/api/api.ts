import axios from "axios";

import { API_URL } from "../constants";
import { CurrencyApiProp } from "../types";

export const getAll = async () => {
  try {
    const response = await axios.get<CurrencyApiProp[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

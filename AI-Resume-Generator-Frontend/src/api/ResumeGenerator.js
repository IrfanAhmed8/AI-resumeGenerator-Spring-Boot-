import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const generateResume = async (prompt) => {
  const response = await apiClient.post('/getResponse/prompt', {
    userDescription: prompt,
  });
  return response.data;
};

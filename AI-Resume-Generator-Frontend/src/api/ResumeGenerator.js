import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const generateFormData = async (prompt) => {
  const response = await apiClient.post('/getResponse/prompt', {
    userDescription: prompt,
  });
  return response.data;
};
export const generateResume=async(formData)=>{
  const resumeResponse=await apiClient.post('/getResume/resume',{
    
  })
  return resumeResponse.data;
}



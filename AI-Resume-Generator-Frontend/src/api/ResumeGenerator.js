import axios from "axios";

const BASE_URL = "http://localhost:8090/";

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
  const resumeResponse=await apiClient.post('/generateResume/resume',{
    resumeTemplate: formData   
  })
  return resumeResponse.data;
}
export const register=async(formData)=>{
 const registerResponse = await apiClient.post(
  '/users/register',
  formData,  // plain object
  { headers: { 'Content-Type': 'application/json' } }
);

  return registerResponse.data;
}
export const signIn = async (formData) => {
  const signInResponse = await apiClient.post(
    '/users/signIn',
    formData, // send plain JS object
    { headers: { 'Content-Type': 'application/json' } }
  );
  return signInResponse.data;
};



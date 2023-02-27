import axios from "axios";
const baseUrl = "http://localhost:4000/";
const API = axios.create({ baseURL: baseUrl });

export const CreateProfile = async (data) => {
  console.log(data);
  const res = await API.post("/profile/createprofile", data);
  return res;
};

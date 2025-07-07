import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/update";
const CATEGORY_URL = "http://localhost:8080/api/v1/category";

export const fetchUpdates = async () => {
  const res = await axios.get(`${BASE_URL}?page=1&limit=100`);
  return res.data.data.docs || res.data.data;
};

export const fetchCategories = async () => {
  const res = await axios.get(`${CATEGORY_URL}?page=1&limit=100`);
  return res.data.data.docs || res.data.data;
};

export const createUpdate = async (form) => {
  return axios.post(BASE_URL, form);
};

export const updateUpdate = async (id, form) => {
  return axios.put(`${BASE_URL}/${id}`, form);
};

export const deleteUpdate = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

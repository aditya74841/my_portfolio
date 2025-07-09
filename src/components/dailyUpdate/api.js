import axios from "axios";

const BASE_URL = `https://portfolio-server-8zb7.onrender.com/api/v1/update`;

// const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/update`;
// const CATEGORY_URL = `${process.env.REACT_APP_SERVER_URL}/category`;



export const fetchUpdates = async (page = 1, limit = 100) => {
  const res = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
  return res.data.data.docs || res.data.data || [];
};

export const fetchUpdateById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data.data;
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

export const addCommentToUpdate = async (id, comment) => {
  return axios.post(`${BASE_URL}/${id}/comment`, comment);
};

export const likeUpdate = async (id) => {
  return axios.get(`${BASE_URL}/${id}/like`);
};

export const dislikeUpdate = async (id) => {
  return axios.get(`${BASE_URL}/${id}/dislike`);
};

export const deleteCommentFromUpdate = async (id, commentId) => {
  return axios.delete(`${BASE_URL}/${id}/comment/${commentId}`);
};

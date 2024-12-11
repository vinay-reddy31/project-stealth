import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchLocations = () => axios.get(`${API_BASE_URL}/locations`);
export const fetchAppliances = (query) =>
  axios.get(`${API_BASE_URL}/appliances`, { params: { query } });
export const fetchFeaturedTechnicians = () =>
  axios.get(`${API_BASE_URL}/featured-technicians`);
export const login = (email, password) =>
  axios.post(`${API_BASE_URL}/login`, { email, password });

import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:5000/api/test/';

// Public Access
const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

// Private Route for User Board
const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() });
};

// Moderator Board : Send GET request with authHeader() : JWT token
const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() });
};
// Admin Board
const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;

import axios from "axios";
import authHeader from "./authHeader"; // For JWT Token

const API_URL = "http://localhost:5000/api/test/";
const API_URL1 = "http://localhost:5000/";

// Public Access
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

// Private Route for User Board (sending JWT with request)
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

// Moderator Board : Send GET request with authHeader() : JWT token
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
// Admin Board
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
// Public GET requests for Content
const getArticles = () => {
  return axios.get(API_URL1 + "articles");
};
const getAnnouncement = ()=>{
  return axios.get(API_URL1+"announcements");
}
const getImages = () =>{
  return axios.get(API_URL1+"images");
}
const getValues = () =>{
  return axios.get(API_URL1+"values");
}
const getServices = ()=>{
  return axios.get(API_URL1+"services");
}
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getArticles,
  getAnnouncement,
  getImages,
  getValues,
  getServices
};

export default UserService;

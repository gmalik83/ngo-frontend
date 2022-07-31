import axios from "axios";
import authHeader from "./authHeader"; // For JWT Token

const API_URL = "http://localhost:5000/api/test/";
const API_URL1 = "http://localhost:5000/";
const API_URL2 = "http://localhost:5000/page/";

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
const newAnnoucement = (url, heading) => {
  return axios.post(API_URL1 + "newAnnoucement", {url,heading},{ headers: authHeader() });
};
const getAdminAnnouncement = () => {
  return axios.get(API_URL1 + "admin/announcements", { headers: authHeader() });
};
// Search Form Data
const getSearchData = (
  name,
  mobile,
  email,
  village,
  block,
  tehsil,
  district,
  state,
  country
) => {
  return axios.post(
    API_URL1 + "searchData",
    { name, mobile, email, village, block, tehsil, district, state, country },
    { headers: authHeader() }
  );
};
// Admin Board
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
// Public GET requests for Content
const getArticles = () => {
  return axios.get(API_URL1 + "articles");
};
// Public GET announcement on Homepage
const getAnnouncement = () => {
  return axios.get(API_URL1 + "announcements");
};
// GET for Images in Slider
const getImages = () => {
  return axios.get(API_URL1 + "images");
};
// GET vision Mission Values

const getValues = () => {
  return axios.get(API_URL1 + "values");
};
// GET Services done by Group
const getServices = () => {
  return axios.get(API_URL1 + "services");
};
// GET dynamic Page content based on Boilerplate
const getPage = (Id) => {
  return axios.get(`${API_URL2}${Id}`);
};
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getArticles,
  getAnnouncement,
  getImages,
  getValues,
  getServices,
  getPage,
  getSearchData,
  getAdminAnnouncement,
  newAnnoucement,
};

export default UserService;
 
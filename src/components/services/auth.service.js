import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";
const API_URL1 = "http://localhost:5000/";

// For New Registration
const register = (
  firstname,
  lastname,
  age,
  father,
  mother,
  hno,
  postoffice,
  block,
  tehsil,
  country,
  state,
  district,
  pincode,
  special,
  graduation,
  xii,
  skill,
  service,
  mobile,
  email,
  password,
  address1
) => {
  return axios
    .post(API_URL + "register", {
      firstname,
      lastname,
      age,
      father,
      mother,
      hno,
      postoffice,
      block,
      tehsil,
      country,
      state,
      district,
      pincode,
      special,
      graduation,
      xii,
      skill,
      service,
      mobile,
      email,
      password,
      address1,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// For Login of Registered and Approved Users
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      // If Server Responded with USER Object , then store it in Local Storage
      if (response.data.firstName) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

// For Contact form in ContactUs Page
const contact = (name, email, message) => {
  return axios
    .post(API_URL1 + "contact", {
      name,
      email,
      message,
    })
    .then((response) => {
      return response.data;
    });
};

// For Logout User => Remove User from LocalStorage
const logout = () => {
  localStorage.removeItem("user");
};

// For GET current User from Local Storage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// Exporting All Functions
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  contact,
};

export default AuthService;
 
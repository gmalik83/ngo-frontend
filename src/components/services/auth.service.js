import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

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
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.firstName) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
 
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

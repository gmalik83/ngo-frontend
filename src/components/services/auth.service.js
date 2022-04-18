import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (
  name,
  email,
  password,
  country,
  state,
  city,
  address,
  pincode,
  mobile
) => {
  return axios
    .post(API_URL + 'register', {
      name,
      email,
      password,
      country,
      state,
      city,
      address,
      pincode,
      mobile,
    })
    .then((response) => {
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.name) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  // Remove User From Local Storage
  localStorage.removeItem('user');
  // return axios.post(API_URL + 'signout').then((response) => {
  //   return response.data;
  // });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

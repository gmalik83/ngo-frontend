import React, { useState, useEffect, useRef } from 'react';

import Footer from '../Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwor, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');

  const initialStateRender = useRef(true);
  const initialCityRender = useRef(true);
  // Form States
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [stat, setStat] = useState([]);
  const [statName, setstatName] = useState('');
  const [city, setCity] = useState([]);
  const [cityName, setCityName] = useState('');

  const getToken = async () => {
    const token = await fetch(
      'https://www.universal-tutorial.com/api/getaccesstoken',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'api-token':
            'ICx-rRFId2aBeh-LhZWJSQkRZEtYjEV_6vgt3JY5uyJqqzt1DBCMFdWNbLicc4RcHts',
          'user-email': 'gaurav96malik@gmail.com',
        },
      }
    );
    const finalToken = (await token.json()).auth_token;
    localStorage.setItem('token', finalToken);
    return finalToken;
  };

  // For Country List in Select Country Option

  useEffect(() => {
    const getCountry = async () => {
      const token = await getToken();
      const countries = await fetch(
        'https://www.universal-tutorial.com/api/countries/',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        }
      );
      const resCountries = await countries.json();
      setCountry(resCountries);
    };
    getCountry();
  }, []);

  // Save the selected Country for Registering

  const handleCountry = (e) => {
    const getCountryName = e.target.value;
    setCountryName(getCountryName);
  };
  // Save the selected State
  const handleState = (e) => {
    const getStateName = e.target.value;
    setstatName(getStateName);
  };
  // Save the selected city
  const handleCity = (e) => {
    setCityName(e.target.value);
  };

  // Re render when Country Selection is changed
  useEffect(() => {
    if (initialStateRender.current) initialStateRender.current = false;
    else {
      const token = localStorage.getItem('token');
      const getState = async () => {
        const resState = await fetch(
          `https://www.universal-tutorial.com/api/states/${countryName}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        );
        const resSt = await resState.json();
        setStat(resSt);
      };
      getState();
    }
  }, [countryName]);

  // Re render when State Name CHange

  useEffect(() => {
    if (initialCityRender.current) initialCityRender.current = false;
    else {
      const token = localStorage.getItem('token');
      const getCity = async () => {
        const resCity = await fetch(
          `https://www.universal-tutorial.com/api/cities/${statName}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        );
        const resC = await resCity.json();
        setCity(resC);
      };
      getCity();
    }
  }, [statName]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container mb-3">
        <h3 className="mt-3">Please Enter Your Details Here:</h3>
        <form>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <label htmlFor="Password">Password:</label>
          <input type="password" id="password" className="form-control" />
          <label htmlFor="Country">Country:</label>
          <select className="form-select" onChange={(e) => handleCountry(e)}>
            <option value="">Select Country</option>
            {country.map((getCon, index) => (
              <option key={index} value={getCon.country_name}>
                {getCon.country_name}
              </option>
            ))}
          </select>
          <label htmlFor="State">State:</label>
          <select className="form-select " onChange={(e) => handleState(e)}>
            <option value="">Select State</option>
            {stat.map((val, index) => (
              <option key={index} value={val.state_name}>
                {val.state_name}
              </option>
            ))}
          </select>
          <div className="mb-3">
            <label htmlFor="City">City:</label>
            <select className="form-select " onChange={(e) => handleCity(e)}>
              <option value="">Select City</option>
              {city.map((val, index) => (
                <option key={index} val={val.city_name}>
                  {val.city_name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="Address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Pincode" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              aria-describedby="pincodeHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="mobile"
              aria-describedby="mobile"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Register;

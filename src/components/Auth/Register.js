import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    age: "",
    father: "",
    mother: "",
    hno: "",
    postoffice: "",
    block: "",
    tehsil: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    email: "",
    password: "",
    special: "",
    mobile: "",
    graduation: "",
    xii: "",
    skill: "",
    service: "",
    address1: "",
  });
  // Loading State for Spinner
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const initialStateRender = useRef(true);
  const initialCityRender = useRef(true);
  // Form States
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [stat, setStat] = useState([]);
  const [statName, setstatName] = useState("");
  const [city, setCity] = useState([]);
  const [cityName, setCityName] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  // Get Token For Country State City API
  const getToken = async () => {
    const token = await fetch(
      "https://www.universal-tutorial.com/api/getaccesstoken",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "api-token":
            "ICx-rRFId2aBeh-LhZWJSQkRZEtYjEV_6vgt3JY5uyJqqzt1DBCMFdWNbLicc4RcHts",
          "user-email": "gaurav96malik@gmail.com",
        },
      }
    );
    const finalToken = (await token.json()).auth_token;
    localStorage.setItem("token", finalToken);
    return finalToken;
  };

  // For Country List in Select Country Option : Render automatically

  useEffect(() => {
    const getCountry = async () => {
      const token = await getToken();
      const countries = await fetch(
        "https://www.universal-tutorial.com/api/countries/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
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
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // Save the selected State
  const handleState = (e) => {
    const getStateName = e.target.value;
    setstatName(getStateName);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // Save the selected city
  const handleCity = (e) => {
    setCityName(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Re render when Country Selection is changed
  useEffect(() => {
    if (initialStateRender.current) initialStateRender.current = false;
    else {
      const token = localStorage.getItem("token");
      const getState = async () => {
        const resState = await fetch(
          `https://www.universal-tutorial.com/api/states/${countryName}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
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
      const token = localStorage.getItem("token");
      const getCity = async () => {
        const resCity = await fetch(
          `https://www.universal-tutorial.com/api/cities/${statName}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        const resC = await resCity.json();
        setCity(resC);
      };
      getCity();
    }
  }, [statName]);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setLoading(true);

    AuthService.register(
      credentials.firstname,
      credentials.lastname,
      credentials.age,
      credentials.father,
      credentials.mother,
      credentials.hno,
      credentials.postoffice,
      credentials.block,
      credentials.tehsil,
      credentials.country,
      credentials.state,
      credentials.district,
      credentials.pincode,
      credentials.special,
      credentials.graduation,
      credentials.xii,
      credentials.skill,
      credentials.service,
      credentials.mobile,
      credentials.email,
      credentials.password,
      credentials.address1
    ).then(
      (response) => {
        // navigate('/profile');
        // window.location.reload();
        setMessage(response.message);
        setSuccessful(true);
        setLoading(false);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
        setLoading(false);
      }
    );
  };

  return (
    <>
      <div className="container mb-3">
        <h3 className="mt-3 mb-3">Please Enter Your Details Here:</h3>
        <form onSubmit={handleSubmit}>
          {!successful && (
            <>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                    value={credentials.firstname}
                    onChange={onChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    id="lastname"
                    value={credentials.lastname}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Age ">Age (आयु):</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  min="18"
                  max="75"
                  value={credentials.age}
                  onChange={onChange}
                  aria-describedby="age"
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Father's name"
                    id="father"
                    name="father"
                    value={credentials.father}
                    onChange={onChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mother's name"
                    id="mother"
                    name="mother"
                    value={credentials.mother}
                    onChange={onChange}
                  />
                </div>
              </div>
              <hr></hr>
              <h4 className="text-center">Native Address:</h4>
              <div className="mb-3 mt-3">
                <label htmlFor="Address" className="form-label">
                  Village/Area/House No.:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hno"
                  name="hno"
                  value={credentials.hno}
                  onChange={onChange}
                  aria-describedby="HouseNumber"
                />
              </div>
              <div>
                <label htmlFor="Post Office" className="form-label">
                  Post Office:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postOffice"
                  name="postoffice"
                  value={credentials.postoffice}
                  onChange={onChange}
                  aria-describedby="PostOffice"
                />
              </div>
              <label htmlFor="block" className="form-label">
                Block:
              </label>
              <input
                type="text"
                className="form-control"
                id="block"
                name="block"
                value={credentials.block}
                onChange={onChange}
                aria-describedby="Block"
              />
              <label htmlFor="tehsil" className="form-label">
                Tehsil:
              </label>
              <input
                type="text"
                className="form-control"
                id="tehsil"
                name="tehsil"
                value={credentials.tehsil}
                onChange={onChange}
                aria-describedby="Tehsil"
              />
              <label htmlFor="Country">Country:</label>
              <select
                className="form-select"
                name="country"
                value={credentials.country}
                onChange={(e) => handleCountry(e)}
              >
                <option value="">Select Country</option>
                {country.map((getCon, index) => (
                  <option key={index} value={getCon.country_name}>
                    {getCon.country_name}
                  </option>
                ))}
              </select>
              <label htmlFor="State">State:</label>
              <select
                className="form-select"
                name="state"
                value={credentials.state}
                onChange={(e) => handleState(e)}
              >
                <option value="">Select State</option>
                {stat.map((val, index) => (
                  <option key={index} value={val.state_name}>
                    {val.state_name}
                  </option>
                ))}
              </select>
              <div className="mb-3">
                <label htmlFor="City">District:</label>
                <select
                  className="form-select "
                  name="district"
                  value={credentials.district}
                  onChange={(e) => handleCity(e)}
                >
                  <option value="">Select District</option>
                  {city.map((val, index) => (
                    <option key={index} val={val.city_name}>
                      {val.city_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="Pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  value={credentials.pincode}
                  onChange={onChange}
                  aria-describedby="pincodeHelp"
                />
              </div>
              <hr></hr>
              <h4 className="text-center">
                Educational and Professional Details
              </h4>
              <hr></hr>

              <label htmlFor="Area of Specialization and Achievement(if any)">
                Area of Specialization and Achievement (if any):
              </label>
              <input
                type="text"
                className="form-control"
                id="special"
                name="special"
                value={credentials.special}
                onChange={onChange}
              />
              <div className="mt-2">
                <label htmlFor="Graduation:">Graduation in:</label>
                <input
                  type="text"
                  className="form-control"
                  id="graduation"
                  name="graduation"
                  value={credentials.graduation}
                  onChange={onChange}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="12th in:">12th in:</label>
                <input
                  type="text"
                  className="form-control"
                  id="xii"
                  name="xii"
                  value={credentials.xii}
                  onChange={onChange}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="Any Special Skill:">
                  Any special education/skill/certificate:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="skill"
                  name="skill"
                  value={credentials.skill}
                  onChange={onChange}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="service">
                  If in Government Job/Private Job/Professional (Write the
                  details. i.e. department, post etc.):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="service"
                  name="service"
                  value={credentials.service}
                  onChange={onChange}
                />
              </div>
              <hr></hr>
              <h4 className="text-center">Contact Details:</h4>
              <hr></hr>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="mobile"
                  name="mobile"
                  value={credentials.mobile}
                  onChange={onChange}
                  aria-describedby="mobile"
                />
              </div>

              <div>
                <label htmlFor="Email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <label htmlFor="Password">Set Password for Later Use:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control"
              />
              <div className="mb-3 mt-3">
                <label htmlFor="Correspondence Address" className="form-label">
                  Correspondence Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  name="address1"
                  value={credentials.address1}
                  onChange={onChange}
                  aria-describedby="addressHelp"
                />
              </div>

              <h5>
                I hereby declare that I have gone through the basic code of
                conduct of the society and my activities will be as per
                organization's code of conduct and Indian constitutional
                provision. 
              </h5>

              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  disabled={loading}
                >
                  Submit
                </button>
              )}
            </>
          )}
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default Register;

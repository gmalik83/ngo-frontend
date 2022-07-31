import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Spinner } from "react-bootstrap";

const Register = () => {
  // State to Store Form Input Data 
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
    district: "",
    state: "",
    country: "India",
    pincode: "",
    special: "",
    graduation: "",
    xii: "",
    skill: "",
    service: "",
    mobile: "",
    email: "",
    password: "",
    address1: "",
  });
  // Loading State for Spinner
  const [loading, setLoading] = useState(false);
  
// Array of States to Get API data 
  const [stat, setStat] = useState([]);
  // Successful Response from Backend
  const [successful, setSuccessful] = useState(false);
  // For any errors , during Form Submit POST
  const [message, setMessage] = useState("");

  // Get Token For State API
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

  // useEffect(() => {
  //   const getCountry = async () => {
  //     const token = await getToken();
  //     const countries = await fetch(
  //       "https://www.universal-tutorial.com/api/countries/",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     const resCountries = await countries.json();
  //     setCountry(resCountries);
  //   };
  //   getCountry();
  // }, []);

  // Save the selected Country for Registering

  // const handleCountry = (e) => {
  //   const getCountryName = e.target.value;
  //   setCountryName(getCountryName);
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };
  // Save the selected State
  const handleState = (e) => {
    // const getStateName = e.target.value;
    // setstatName(getStateName);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // Save the selected city
  // const handleCity = (e) => {
  //   setCityName(e.target.value);
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  // Re render when Country Selection is changed or Component Loads
  useEffect(() => {
    const getState = async () => {
      const token = await getToken();
      const resState = await fetch(
        `https://www.universal-tutorial.com/api/states/India`,
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
  }, []);

  // Re render when State Name CHange

  // useEffect(() => {
  //   if (initialCityRender.current) initialCityRender.current = false;
  //   else {
  //     const token = localStorage.getItem("token");
  //     const getCity = async () => {
  //       const resCity = await fetch(
  //         `https://www.universal-tutorial.com/api/cities/${statName}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       );
  //       const resC = await resCity.json();
  //       setCity(resC);
  //     };
  //     getCity();
  //   }
  // }, [statName]);

  // On Change Handler for Inputs
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setLoading(true);

    // Form Submit POST
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
        setMessage(response.message);
        // Form Submit is Successfull
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
                  <label htmlFor="FirstName">First Name(प्रथम नाम):</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                    value={credentials.firstname}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="LastName">Last Name(अंतिम नाम):</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    id="lastname"
                    value={credentials.lastname}
                    onChange={onChange}
                    required
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
                  required
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="father">Father's Name (पिता का नाम):</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Father's name"
                    id="father"
                    name="father"
                    value={credentials.father}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="mother">Mother's Name (माता का नाम):</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mother's name"
                    id="mother"
                    name="mother"
                    value={credentials.mother}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <hr></hr>
              <h4 className="text-center">Native Address (मूल पता):</h4>
              <div className="mb-3 mt-3">
                <label htmlFor="Address" className="form-label">
                  Village/Area/House No.(गांव/क्षेत्र/मकान नं):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hno"
                  name="hno"
                  value={credentials.hno}
                  onChange={onChange}
                  aria-describedby="HouseNumber"
                  required
                />
              </div>
              <div>
                <label htmlFor="Post Office" className="form-label">
                  Post Office (डाक-घर):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postOffice"
                  name="postoffice"
                  value={credentials.postoffice}
                  onChange={onChange}
                  aria-describedby="PostOffice"
                  required
                />
              </div>
              <label htmlFor="block" className="form-label">
                Block (खंड):
              </label>
              <input
                type="text"
                className="form-control"
                id="block"
                name="block"
                value={credentials.block}
                onChange={onChange}
                aria-describedby="Block"
                required
              />
              <label htmlFor="tehsil" className="form-label">
                Tehsil (तहसील):
              </label>
              <input
                type="text"
                className="form-control"
                id="tehsil"
                name="tehsil"
                value={credentials.tehsil}
                onChange={onChange}
                aria-describedby="Tehsil"
                required
              />
              <div className="mb-3">
                <label htmlFor="City">District ( जिला ):</label>
                <input
                  type="text"
                  className="form-control"
                  name="district"
                  id="district"
                  value={credentials.district}
                  onChange={onChange}
                  aria-describedby="District"
                  required
                />
              </div>
              <div className="m-1">
                <label htmlFor="State">State (राज्य):</label>
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
              </div>
              <div className="m-1">
                <label htmlFor="Country">Country(देश):</label>
                <select
                  className="form-select"
                  name="country"
                  id="country"
                  value={credentials.country}
                  onChange={onChange}
                >
                  <option value="India">India</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="Pincode" className="form-label">
                  Pincode (पिन कोड):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  value={credentials.pincode}
                  onChange={onChange}
                  aria-describedby="pincodeHelp"
                  required
                />
              </div>
              <hr></hr>
              <h4 className="text-center">
                Educational and Professional Details (शैक्षिक और व्यावसायिक
                विवरण):
              </h4>
              <hr></hr>

              <label htmlFor="Area of Specialization and Achievement(if any)">
                Area of Specialization and Achievement (if any) (विशेषज्ञता और
                उपलब्धि का क्षेत्र (यदि कोई हो) ):
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
                <label htmlFor="Graduation:">
                  Graduation in (स्नातक विषय):
                </label>
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
                <label htmlFor="12th in:">12th in (12वीं):</label>
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
                  Any special education/skill/certificate (कोई विशेष
                  शिक्षा/कौशल/प्रमाण पत्र:):
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
                  details. i.e. department, post etc.) यदि सरकारी नौकरी/निजी
                  नौकरी/पेशेवर में (विवरण लिखें। अर्थात विभाग, पद आदि): :
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
              <h4 className="text-center">
                Contact Details (सम्पर्क करने का विवरण:):
              </h4>
              <hr></hr>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number (फ़ोन नंबर)
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="mobile"
                  name="mobile"
                  value={credentials.mobile}
                  onChange={onChange}
                  aria-describedby="mobile"
                  required
                />
              </div>

              <div>
                <label htmlFor="Email">Email Address (ई-मेल एड्रेस):</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="form-control"
                  required
                />
              </div>
              <label htmlFor="Password">
                Set Password for Later Use (बाद में उपयोग के लिए पासवर्ड सेट
                करें:):
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control"
                required
              />
              <div className="mb-3 mt-3">
                <label htmlFor="Correspondence Address" className="form-label">
                  Correspondence Address (पत्राचार का पता)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  name="address1"
                  value={credentials.address1}
                  onChange={onChange}
                  aria-describedby="addressHelp"
                  required
                />
              </div>

              <h5>
                I hereby declare that I have gone through the basic code of
                conduct of the society and my activities will be as per
                organization's code of conduct and Indian constitutional
                provision.
                <br /> <br />
                मैं एतद्द्वारा घोषणा करता हूं कि मैंने समाज की मूल आचार संहिता
                का पालन किया है और मेरी गतिविधियां संगठन की आचार संहिता और
                भारतीय संवैधानिक प्रावधान के अनुसार होंगी।
                <br />
              </h5>

              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary mb-3 btn-block btn-lg"
                  disabled={loading}
                >
                  Submit
                </button>
              )}
            </>
          )}
          {/* If any Errors , then Show Errors */}
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
 
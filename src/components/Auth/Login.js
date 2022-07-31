import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Spinner } from "react-bootstrap";

const Login = () => {
  // Email and Password in Object for Submitting Form
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // Message for Any Errors
  const [message, setMessage] = useState("");
  // Loading State on Submit Button : Submit Button Will be replaced by Spinner
  const [loading, setLoading] = useState(false);
  // LoginMessage
  const [loginMessage, setLoginMessage] = useState("");

  let navigate = useNavigate();

  // Login Component will not be shown to logged in users
  useEffect(() => {
    // Getting the Token from LocalStorgae if User is logged in 
    const user = AuthService.getCurrentUser();
    if (user) {
      // If User is Logged in , then dont show form and display error login message
      setLoginMessage("You are already Logged in.");
    }
  }, []);

  // Login Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // POST email,password to backend
    AuthService.login(credentials.email, credentials.password).then(
      () => {
        // If Response OK , Navigate to user Profile
        navigate("/profile");
        window.location.reload();
        setLoading(false);
      },
      (error) => {
        console.log(error);
        // console.log(error.response.data);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        // If any Error in POST request or error on Server
        setMessage(resMessage);
      }
    );
  };

  // On Change Handler for Inputs
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* If Login Message Exist (User is Already Logged in , then show error instead of form) */}
      {loginMessage ? (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {loginMessage}
          </div>
        </div>
      ) : (
        // If User is not Logged in , then Show the Form
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-7 offset-md-3">
              <h3 className="text-center mt-2">
                Only Coordinators Login Here
              </h3>
              <hr></hr>
            </div>
          </div>
          <div className="mb-3 container">
            <div className="row">
              <div className="col-md-5 offset-md-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control mb-3"
                  value={credentials.email}
                  onChange={onChange}
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="col-md-5 offset-md-4">
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                <div className="mb-3">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    required
                  />
                </div>
              </div>
              {/* If Loading = TRUE then show Spinner Instead of Submit Button  */}
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden col-md-5 offset-md-4">
                    Loading...
                  </span>
                </Spinner>
              ) : (
                <div className="form-group col-md-5 offset-md-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={loading}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      )}
      {/* If any Error in POST on backend  */}
      {message && (
        <div className="form-group col-md-5 offset-md-4" >
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
 
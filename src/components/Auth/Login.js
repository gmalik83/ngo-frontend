import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // const form = useRef();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  let navigate = useNavigate();

  // Check if User is already logged in when Login Component Reloads
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setLoginMessage("You are already Logged in.");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    AuthService.login(credentials.email, credentials.password).then(
      () => {
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
        setMessage(resMessage);
      }
    );
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loginMessage ? (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {loginMessage}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mt-2">Please Login Here</h3>
          <div className="mb-3 container">
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
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </form>
      )}

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </>
  );
};
export default Login;

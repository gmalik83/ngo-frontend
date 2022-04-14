import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

// import Loading from '../Loading'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  // const form = useRef();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    AuthService.login(credentials.email, credentials.password).then(
      () => {
        navigate('/profile');
        window.location.reload();
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
    setLoading(false);

    // try {
    //   setLoading(true);
    //   const response = await fetch('http://localhost:5000/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: credentials.email,
    //       password: credentials.password,
    //     }),
    //   });
    //   const { data } = await response.json();
    //   console.log(data.user);
    //   setLoading(false);

    //   localStorage.setItem('userInfo', JSON.stringify(data.user));
    //   // if (json.success) {
    //   //   // Save Auth Token and Redirect
    //   //   localStorage.setItem('tokenn', json.authtoken);
    //   // } else {
    //   //   alert('Invalid credentials');
    //   // }
    // } catch (error) {
    //   setError(error);
    //   setLoading(false);
    // }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
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
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
export default Login;

import React, { useState } from "react";
import AuthService from "./services/auth.service";
import { Spinner } from "react-bootstrap";

export const Contact = () => {
  // Message for Displaying Error or Success
  const [message, setMessage] = useState("");
  // For Hide Form if Successfull is True
  const [successful, setSuccessful] = useState(false);
  // Loading Spinner
  const [loading, setLoading] = useState(false);
  // Form Details
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  // OnChange Handler for Inputs
  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  // Form Submit Handler
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    AuthService.contact(details.name, details.email, details.message).then(
      (response) => {
        setMessage(response);
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
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact Us</h6>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 mb-5">
            <div className="card shadow">
              <div className="card-body">
                <h6>Support Office</h6>
                <div className="underline"></div>
                <p>
                  Sample Support Address <br></br>Haryana 136119
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-5 mb-5">
            <div className="card shadow">
              <div className="card-body">
                <h6>Registered Office</h6>
                <div className="underline"></div>
                <p>
                  Sample Registered Office herez<br></br>New Delhi , India 110045
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <h3>Please leave your contact details , we will get back to you:</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={details.name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Message">Message:</label>
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              value={details.message}
              onChange={onChange}
              required
            />
          </div>
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
        </form>

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
      </div>
    </div>
  );
};
 
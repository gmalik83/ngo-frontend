import React, { useState } from 'react';

export const Contact = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        message: details.message,
      }),
    });
    const json = await response.json();
    console.log(json);
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
                  North Legion ,Level 1, NIT Kurukshetra <br></br>Haryana 136119
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
                  NL Group , Level 5 , PK Tower <br></br>New Delhi , India
                  110045
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <h3>Please leave your contact details , we will find you:</h3>
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

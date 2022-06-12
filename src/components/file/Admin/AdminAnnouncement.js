import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminAnnouncement = () => {
  const [form, setForm] = useState(false);
  const [viewtable, setViewTable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [announcement, setAnnouncement] = useState({ url: "", heading: "" });

  // Show New Announcement Form
  const handleNewForm = () => {
    setForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Send Request for New Announcement to Backend

    //setForm(false);
  };
  const hideFormShowTable = ()=>{
      // Form is Hidden 
      setForm(false);

  }
  const onChange = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="text-center m-2">Admin Panel for Announcement</h1>
      <div className="row">
        <div className="col">
          {/* Add New Announcement */}
          <button className="btn btn-warning shadow" onClick={handleNewForm}>
            New Announcement
          </button>
        </div>
        {form ? (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-7 offset-md-3">
                  <h3 className="text-center mt-2">
                    Enter New Announcement Details Here
                  </h3>
                  <hr></hr>
                </div>
              </div>
              <div className="mb-3 container">
                <div className="row">
                  <div className="col-md-5 offset-md-4">
                    <label htmlFor="Url" className="form-label">
                      Public File URL for Announcement
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={announcement.url}
                      onChange={onChange}
                      id="url"
                      name="url"
                      aria-describedby="newUrl"
                      required
                    />
                  </div>
                  <div className="col-md-5 offset-md-4">
                    <div className="mb-3">
                      <label htmlFor="Heading" className="form-label">
                        Heading of Announcement
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={announcement.heading}
                        onChange={onChange}
                        name="heading"
                        id="heading"
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
                        Submit Announcement
                      </button>
                      <Link
                        to="/admin/announcement"
                        className="btn btn-success btn-block"
                        onClick={hideFormShowTable}
                      >
                        Go Back
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncement;

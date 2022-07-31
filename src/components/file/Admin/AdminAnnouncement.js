import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
// import EventBus from "../../common/EventBus";

import UserService from "../../services/user.service.js";

const AdminAnnouncement = () => {
  const [form, setForm] = useState(false);
  const [viewtable, setViewTable] = useState(true);
  // Array for Display Pending Requests
  const [content, setContent] = useState([]);
  // Set Message
  const [message, setMessage] = useState("");
  // For Open/Close MODAL State
  const [modalState, setModalState] = useState(false);
  // UserID for Pending Request Item
  const [dataId, setDataId] = useState("");
  // Call this when Component Render
  const [loading, setLoading] = useState(false);
  const [announcement, setAnnouncement] = useState({ url: "", heading: "" });
  // When Component Renders 
  useEffect(() => {
    UserService.getAdminAnnouncement().then(
      (response) => {
        // If Response if OK
        if (response.status === 200) {
          // Response.data is array of pending requests
          // Send this in Content Array
          setContent(response.data);
        }
      },
      (error) => {
        // Set resMessage to Error , if it exists
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        if (error.response && error.response.status === 403) {
          // If Forbidden then Logout User
          // EventBus.dispatch("logout");
        }
      }
    );
  }, []);
  // Show New Announcement Form
  const handleNewForm = () => {
    setForm(true);
    setViewTable(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    UserService.newAnnoucement(announcement.url,announcement.heading).then((response)=>{
      window.location.reload();
      setLoading(false);
     
    },(error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
      setLoading(false);
    })
    // Send Request for New Announcement to Backend
  };
  const hideFormShowTable = () => {
    // Form is Hidden
    setForm(false);
  };
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
          <div className="container table-responsive">
            <h3 className="mt-3 mb-3">All Available Announcement:</h3>
            {/*If Content array is NULL*/}
            {!content.length && (
              <h1 className="text-center mt-4 mb-4">
                No Announcement available
              </h1>
            )}
            {/* {modalState && dataId && (
              <AModal
                show={modalState}
                id={dataId}
                handleModalToggle={changeModal}
              ></AModal>
            )} */}

            {content.length ? (
              <table className="table table1">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading of Announcement</th>
                    {/* <th scope="col">Date Uploaded</th> */}
                    {/* <th scope="col">INFO</th>
                    <th scope="col">UPDATE</th>
                    <th scope="col">DELETE</th> */}
                  </tr>
                </thead>
                <tbody>
                  {content.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.heading}</td>
                        {/* <td>{item.date}</td> */}
                        {/* <td>
                          <button
                            className="btn btn-warning shadow"
                            // onClick={handleModalToggle}
                            data-id={item._id}
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-success shadow"
                            // onClick={handleModalToggle}
                            data-id={item._id}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger shadow"
                            // onClick={handleModalToggle}
                            data-id={item._id}
                          >
                            Delete
                          </button>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <></>
            )}
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncement;

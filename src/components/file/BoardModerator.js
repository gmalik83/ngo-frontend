import React, { useState, useEffect } from "react";
import MyModalComponent from "./MyModalComponent";
import "./BoardUser.css";
import UserService from "../services/user.service";

import EventBus from "../../common/EventBus";
const BoardModerator = () => {
  // Array for Display Pending Requests
  const [content, setContent] = useState([]);
  // Set Message
  const [message, setMessage] = useState("");
  // For Open/Close MODAL State
  const [modalState, setModalState] = useState(false);
  // UserID for Pending Request Item
  const [dataId, setDataId] = useState("");
  // Call this when Component Render

  useEffect(() => {
    UserService.getModeratorBoard().then(
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
       
      }
    );
  }, []);

  // Toggle  modalState
  const changeModal = () => {
    // Invert modalState
    setModalState(!modalState);
    // Set dataId to NULL
    setDataId("");
  };

  // Handling ModalToggle
  const handleModalToggle = (e) => {
    // Id of Selected user in table
    const id = e.target.dataset.id;
    // console.log(id);
    // Only if Modal is Closed then setData Id  (Only Set if ModalState is true)
    if (modalState === false) {
      setDataId(id);
    } else setDataId("");
    // Invert ModalState on Toggle
    setModalState(!modalState);
  };
  // For Search Form
  const [formSearchMessage, setFormSearchMessage] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    village: "",
    block: "",
    tehsil: "",
    district: "",
    state: "",
    country: "",
  });
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchLoading(true);
    setFormSearchMessage("");
    UserService.getSearchData(
      formData.name,
      formData.mobile,
      formData.email,
      formData.village,
      formData.block,
      formData.tehsil,
      formData.district,
      formData.state,
      formData.country
    ).then(
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

        setFormSearchMessage(resMessage);
        if (error.response && error.response.status === 403) {
          // If Forbidden then Logout User
          EventBus.dispatch("logout");
        }
      }
    );
  };

  const onSearchChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  return (
    <div className="container table-responsive">
      <h3 className="mt-3 mb-3">All Volunteer Details:</h3>
      {/*If Content array is NULL*/}
      {!content.length && (
        <h1 className="text-center mt-4 mb-4">No Requests available</h1>
      )}
      {/* Output Form Here*/}
      <div className="row">
        <div className="col">
          <form
            onSubmit={handleSearchSubmit}
            className="border border-success p-2"
          >
            <h3 className="text-center">Search for Any Person</h3>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={onSearchChange}
                  name="name"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputMobile">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={onSearchChange}
                  placeholder="Mobile"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputMobile">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onSearchChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="Village">Village</label>
                <input
                  type="text"
                  className="form-control"
                  id="village"
                  value={formData.village}
                  onChange={onSearchChange}
                  name="village"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputBlock">Block</label>
                <input
                  type="text"
                  className="form-control"
                  id="block"
                  name="block"
                  value={formData.block}
                  onChange={onSearchChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputTehsil">Tehsil</label>
                <input
                  type="text"
                  className="form-control"
                  id="Tehsil"
                  name="tehsil"
                  value={formData.tehsil}
                  onChange={onSearchChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="District">District</label>
                <input
                  type="text"
                  className="form-control"
                  id="District"
                  value={formData.district}
                  onChange={onSearchChange}
                  name="district"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={onSearchChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputCountry">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={onSearchChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-danger btn-block">
              Search
            </button>
            {formSearchMessage && (
              <div className="form-group col-md-5 offset-md-4">
                <div className="alert alert-danger" role="alert">
                  {formSearchMessage}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      {modalState && dataId && (
        <MyModalComponent
          show={modalState}
          id={dataId}
          handleModalToggle={changeModal}
        ></MyModalComponent>
      )}

      {content.length ? (
        <table className="table table1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">District</th>
              <th scope="col">Mobile</th>
              {/* <th scope="col">Current Role</th> */}
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.email}</td>
                  <td>{item.country}</td>
                  <td>{item.state}</td>
                  <td>{item.district}</td>
                  <td>{item.mobile}</td>
                  {/* <td>{item.role}</td> */}
                  <td>
                    <button
                      className="btn btn-warning shadow"
                      onClick={handleModalToggle}
                      data-id={item._id}
                    >
                      View
                    </button>
                  </td>
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
  );
};
export default BoardModerator;

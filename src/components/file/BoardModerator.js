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
        if (error.response && error.response.status === 403) {
          // If Forbidden then Logout User
          EventBus.dispatch("logout");
        }
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

  return (
    <div className="container table-responsive">
      <h3 className="mt-3 mb-3">All Volunteer Details:</h3>
      {/*If Content array is NULL*/}
      {!content.length && (
        <h1 className="text-center mt-4 mb-4">
          No Requests available
        </h1>
      )}

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

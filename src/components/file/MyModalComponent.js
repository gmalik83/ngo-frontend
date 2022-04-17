import React, { useEffect, useState } from "react";
import authHeader from "../services/authHeader";
import { Modal, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const url = "http://localhost:5000";

const MyModalComponent = ({ show, id, handleModalToggle }) => {
  // UserData state for GET request
  const [userData, setUserData] = useState("");
  // For Component show State
  const [modalState, setModalState] = useState(show);
  // For Sending Approve or Reject Request
  const [userId, setUserId] = useState("");
  // For Loading State
  const [loading, setLoading] = useState(false);
  // For Hiding Form
  const [done, setDone] = useState(false);
  // Error Message for getUserbyId
  const [message, setMessage] = useState("");
  // Message after approve
  const [message1, setMessage1] = useState("");

  // State for Successfull Approval or Deletion
  const [approve, setApprove] = useState(false);

  const handleModal = () => {
    console.log("Something is Clicked!");
    setModalState(false);
  };
  const closeModal = () => {
    setModalState(false);
    handleModalToggle();
  };
  const secondModal = () => {
    setApprove(false);
  };

  // Function to get data for Particular User
  const getData = async (id) => {
    const res = await fetch(`${url}/api/user/getmod?id=${id}`, {
      headers: authHeader(),
    });

    const data = await res.json();
    // If Resource Not Found then display message
    if (res.status === 200) {
      setUserData(data);
    } else if (res.status === 404) {
      setMessage(data.message);
    } else {
      setMessage("Something Went Wrong With Server:500");
    }
    // setUserData(data);
  };

  // Handle Approve or Reject
  const handleApprove = () => {
    // console.log(e.target.name);
    // console.log(`Approve is Clicked! ${userData._id}`);

    // Close This User MODAL
    setModalState(false);
    setApprove(true);

    axios
      .post(url + `/api/approve/?id=${userData._id}`)
      .then((res) => setMessage1(res.data.message))
      .catch((error) => {
        console.log(error);
        // console.log(error.response.data);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage1(resMessage);
      });
  };
  const handleReject = () => {
    // Close Open Modal
    setModalState(false);
    setApprove(true);
    axios
      .post(url + `/api/deleteUser/?id=${userData._id}`)
      .then((res) => setMessage1(res.data.message))
      .catch((error) => {
        console.log(error);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage1(resMessage);
      });
  };

  // Call GET for user on Rendering Modal Component and set UserData state

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div>
      {userData ? (
        <Modal show={modalState} centered onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Details of {userData.name}:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.name}
                  aria-describedby="Name"
                  placeholder="Name"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={userData.email}
                  placeholder="Email"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="Country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.country}
                  aria-describedby="Country"
                  placeholder="Country"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="State">State</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.state}
                  aria-describedby="State"
                  placeholder="State"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="City">City</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.city}
                  aria-describedby="City"
                  placeholder="City"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.address}
                  aria-describedby="address"
                  placeholder="address"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="Mobile">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.mobile}
                  aria-describedby="mobile"
                  placeholder="mobile"
                  readOnly
                />
                <div className="form-group">
                  <label htmlFor="Pincode">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userData.pincode}
                    aria-describedby="Pincode"
                    placeholder="Pincode"
                    readOnly
                  />
                </div>
              </div>
            </>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleApprove}>
              Approve
            </Button>
            <Button variant="danger" onClick={handleReject}>
              Reject
            </Button>
            <Button variant="warning" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={modalState} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Something Went Wrong With the server</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <h3>Response From Server:</h3>
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => setModalState(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {/* /* : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
      </Spinner> )*/}
      {approve && (
        <Modal show={approve} centered onHide={secondModal}>
          <Modal.Header closeButton>
            <Modal.Title>Status of Request :</Modal.Title>
          </Modal.Header>
          <Modal.Body>Result : {message1}</Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => setApprove(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
export default MyModalComponent;

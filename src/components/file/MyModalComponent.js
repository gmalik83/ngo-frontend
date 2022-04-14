import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const url = "http://localhost:5000";

const MyModalComponent = ({ show, id, handleModalToggle }) => {
  // UserData state for GET request
  const [userData, setUserData] = useState("");
  // For Component show State
  const [modalState, setModalState] = useState(show);
  // For Sending Approve or Reject Request 
  const [userId,setUserId] = useState('');

  const handleModal = () => {
    console.log("Something is Clicked!");
    setModalState(false);
  };
  const closeModal = () => {
    setModalState(false);
  };

  // Function to get data for Particular User
  const getData = async (id) => {
    const res = await fetch(`${url}/api/user/getmod?id=${id}`);

    const data = await res.json();
    setUserData(data);
  };

  // Handle Approve or Reject
  const handleApprove = () => {
    console.log(`Approve is Clicked! ${userData._id}`);
    


  };
  const handleReject = () => {
    console.log("Reject is Clicked!");
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
            <Modal.Title>
              Details of {userData.name}:
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleApprove}>
              Approve
            </Button>
            <Button variant="danger" onClick={handleReject}>
              Reject
            </Button>
            <Button variant="warning" onClick={() => setModalState(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <h2>Something Went Wrong</h2>
      )}
    </div>
  );
};
export default MyModalComponent;

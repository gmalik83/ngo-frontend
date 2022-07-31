import React, { useEffect, useState } from "react";
import authHeader from "../services/authHeader";
import { Modal, Button} from "react-bootstrap";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const url = "http://localhost:5000";

const MyModalComponent = ({ show, id, handleModalToggle }) => {
  // UserData state for GET request
  const [userData, setUserData] = useState("");
  // For Component show State
  const [modalState, setModalState] = useState(show);
  // For Sending Approve or Reject Request
  // const [userId, setUserId] = useState("");
  // For Loading State
  // const [loading, setLoading] = useState(false);
  // // For Hiding Form
  // const [done, setDone] = useState(false);
  // Error Message for getUserbyId
  const [message, setMessage] = useState("");
  // Message after approve
  const [message1, setMessage1] = useState("");
  const [roleLevel, setRoleLevel] = useState(0);
  // State for Successful Role Change
  const [roleUpdate, setRoleUpdate] = useState(false);
  // New Role Level updated
  const [roleMessage, setRoleMessage] = useState("");
  // Error Message
  const [roleFailed, setRoleFailed] = useState("");

  // Get Current Logged in User

  // State for Successfull Approval or Deletion
  const [approve, setApprove] = useState(false);

  const closeModal = () => {
    console.log("I am executing");
    setModalState(false);
    handleModalToggle();
  };
  const secondModal = () => {
    setApprove(false);
  };
  const thirdModal = () => {
    setRoleUpdate(false);
  };
  // Function to get data for Particular User
  const getData = async (id) => {
    // setLoading(true);
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
      .post(
        url + `/api/approve/?id=${userData._id}`,
        {},
        {
          headers: authHeader(),
        }
      )
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
      .post(
        url + `/api/deleteUser/?id=${userData._id}`,
        {},
        {
          headers: authHeader(),
        }
      )
      .then((res) => setMessage1(res.data.message))
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage1(resMessage);
      });
  };

  const updateUser = (e) => {
    setModalState(false);
    setRoleUpdate(true);
    const value = e.target.value;
    const _id = id;
    axios
      .post(
        url + "/api/update",
        {
          value,
          _id,
        },
        {
          headers: authHeader(),
        }
      )
      .then((res) => setRoleMessage(res.data.message))
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setRoleFailed(resMessage);
      });
  };
  // Call GET for user on Rendering Modal Component and set UserData state

  useEffect(() => {
    getData(id);
    const user = AuthService.getCurrentUser();
    setRoleLevel(user.level);
  }, []);

  return (
    <div>
      {userData ? (
        <Modal show={modalState} centered onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Details of {userData.firstName}:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <>
              <div className="row mb-3">
                <div className="col">
                  <span className="badge badge-pill badge-success">
                    Success
                  </span>
                  <label htmlFor="FirstName">First Name:</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                    value={userData.firstName}
                    readOnly
                  />
                </div>
                <div className="col">
                  <label htmlFor="LastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    id="lastname"
                    value={userData.lastName}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Age ">Age:</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  min="18"
                  max="75"
                  value={userData.age}
                  aria-describedby="age"
                  readOnly
                />
                <div className="form-group">
                  <label htmlFor="Role">Current Role:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userData.role}
                    readOnly
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="FatherName">Father's Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Father's name"
                    id="father"
                    name="father"
                    value={userData.father}
                    readOnly
                  />
                </div>
                <div className="col">
                  <label htmlFor="LastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mother's name"
                    id="mother"
                    name="mother"
                    value={userData.mother}
                    readOnly
                  />
                </div>
              </div>
              <hr></hr>
              <h4 className="text-center">Native Address:</h4>
              <div className="mb-3 mt-3">
                <label htmlFor="Address" className="form-label">
                  Village/Area/House No.:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hno"
                  name="hno"
                  value={userData.village}
                  aria-describedby="HouseNumber"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="Post Office" className="form-label">
                  Post Office:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postOffice"
                  name="postoffice"
                  value={userData.postoffice}
                  aria-describedby="PostOffice"
                  readOnly
                />
              </div>
              <label htmlFor="block" className="form-label">
                Block:
              </label>
              <input
                type="text"
                className="form-control"
                id="block"
                name="block"
                value={userData.block}
                aria-describedby="Block"
                readOnly
              />
              <label htmlFor="tehsil" className="form-label">
                Tehsil:
              </label>
              <input
                type="text"
                className="form-control"
                id="tehsil"
                name="tehsil"
                value={userData.tehsil}
                aria-describedby="Tehsil"
                readOnly
              />
              <label htmlFor="district" className="form-label">
                District:
              </label>
              <input
                type="text"
                className="form-control"
                id="district"
                name="district"
                value={userData.district}
                aria-describedby="District"
                readOnly
              />
              <label htmlFor="State" className="form-label">
                State:
              </label>
              <input
                type="text"
                className="form-control"
                id="State"
                name="state"
                value={userData.state}
                aria-describedby="State"
                readOnly
              />
              <label htmlFor="tehsil" className="form-label">
                Country:
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={userData.country}
                aria-describedby="country"
                readOnly
              />
              <div className="mb-3">
                <label htmlFor="Pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  value={userData.pincode}
                  aria-describedby="pincodeHelp"
                  readOnly
                />
              </div> 
              <hr></hr>
              <h4 className="text-center">
                Educational and Professional Details
              </h4>
              <hr></hr>

              <label htmlFor="Area of Specialization and Achievement(if any)">
                Area of Specialization and Achievement (if any):
              </label>
              <input
                type="text"
                className="form-control"
                id="special"
                name="special"
                value={userData.special}
                readOnly
              />
              <div className="mt-2">
                <label htmlFor="Graduation:">Graduation in:</label>
                <input
                  type="text"
                  className="form-control"
                  id="graduation"
                  name="graduation"
                  value={userData.graduation}
                  readOnly
                />
              </div>
              <div className="mt-2">
                <label htmlFor="12th in:">12th in:</label>
                <input
                  type="text"
                  className="form-control"
                  id="xii"
                  name="xii"
                  value={userData.xii}
                  readOnly
                />
              </div>
              <div className="mt-2">
                <label htmlFor="Any Special Skill:">
                  Any special education/skill/certificate:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="skill"
                  name="skill"
                  value={userData.skill}
                  readOnly
                />
              </div>
              <div className="mt-2">
                <label htmlFor="service">
                  If in Government Job/Private Job/Professional (Write the
                  details. i.e. department, post etc.):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="service"
                  name="service"
                  value={userData.service}
                  readOnly
                />
              </div>
              <hr></hr>
              <h4 className="text-center">Contact Details:</h4>
              <hr></hr>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="mobile"
                  name="mobile"
                  value={userData.mobile}
                  aria-describedby="mobile"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="Email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  className="form-control"
                  readOnly
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="Correspondence Address" className="form-label">
                  Correspondence Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  name="address1"
                  value={userData.address1}
                  aria-describedby="addressHelp"
                  readOnly
                />
              </div>
            </>
          </Modal.Body>

          <Modal.Footer>
            {roleLevel === 1 && (
              <div>
                {/* <Button
                  variant="primary"
                  className="mr-2 mb-2"
                  value="1"
                  onClick={updateUser}
                >
                  Make Admin
                </Button> */}
                <Button
                  variant="secondary"
                  className="mr-2 mb-2"
                  value="2"
                  onClick={updateUser}
                >
                  Make State Coordinator
                </Button>
                <Button
                  variant="success"
                  className="mr-2 mb-2"
                  value="3"
                  onClick={updateUser}
                >
                  Make District Coordinator
                </Button>
                <Button
                  variant="warning"
                  className="mr-2 mb-2"
                  value="4"
                  onClick={updateUser}
                >
                  Make Tehsil Coordinator
                </Button>
                <Button
                  variant="info"
                  className="mr-2 mb-2"
                  value="5"
                  onClick={updateUser}
                >
                  Make Block Coordinator
                </Button>
                <Button
                  variant="danger"
                  className="mr-2 mb-2"
                  value="6"
                  onClick={updateUser}
                >
                  Make Village Coordinator
                </Button>
              </div>
            )}
            {roleLevel === 2 && (
              <div>
                {/* <Button
                  variant="secondary"
                  className="mr-2 mb-2"
                  value="2"
                  onClick={updateUser}
                >
                  Make State Coordinator
                </Button> */}
                <Button
                  variant="success"
                  className="mr-2 mb-2"
                  value="3"
                  onClick={updateUser}
                >
                  Make District Coordinator
                </Button>
                <Button
                  variant="warning"
                  className="mr-2 mb-2"
                  value="4"
                  onClick={updateUser}
                >
                  Make Tehsil Coordinator
                </Button>
                <Button
                  variant="info"
                  className="mr-2 mb-2"
                  value="5"
                  onClick={updateUser}
                >
                  Make Block Coordinator
                </Button>
                <Button
                  variant="danger"
                  className="mr-2 mb-2"
                  value="6"
                  onClick={updateUser}
                >
                  Make Village Coordinator
                </Button>
              </div>
            )}
            {roleLevel === 3 && (
              <div>
                {/* <Button
                  variant="success"
                  className="mr-2 mb-2"
                  value="3"
                  onClick={updateUser}
                >
                  Make District Coordinator
                </Button> */}
                <Button
                  variant="warning"
                  className="mr-2 mb-2"
                  value="4"
                  onClick={updateUser}
                >
                  Make Tehsil Coordinator
                </Button>
                <Button
                  variant="info"
                  className="mr-2 mb-2"
                  value="5"
                  onClick={updateUser}
                >
                  Make Block Coordinator
                </Button>
                <Button
                  variant="danger"
                  className="mr-2 mb-2"
                  value="6"
                  onClick={updateUser}
                >
                  Make Village Coordinator
                </Button>
              </div>
            )}
            {roleLevel === 4 && (
              <div>
                {/* <Button
                  variant="warning"
                  className="mr-2 mb-2"
                  value="4"
                  onClick={updateUser}
                >
                  Make Tehsil Coordinator
                </Button> */}
                <Button
                  variant="info"
                  className="mr-2 mb-2"
                  value="5"
                  onClick={updateUser}
                >
                  Make Block Coordinator
                </Button>
                <Button
                  variant="danger"
                  className="mr-2 mb-2"
                  value="6"
                  onClick={updateUser}
                >
                  Make Village Coordinator
                </Button>
              </div>
            )}
            {roleLevel === 5 && (
              <div>
                {/* <Button
                  variant="info"
                  className="mr-2 mb-2"
                  value="5"
                  onClick={updateUser}
                >
                  Make Block Coordinator
                </Button> */}
                <Button
                  variant="danger"
                  className="mr-2 mb-2"
                  value="6"
                  onClick={updateUser}
                >
                  Make Village Coordinator
                </Button>
              </div>
            )}
            {userData.approved ? (
              <></>
            ) : (
              <div>
                <Button
                  variant="success"
                  className="mr-2"
                  onClick={handleApprove}
                >
                  Approve
                </Button>
                <Button variant="danger" onClick={handleReject}>
                  Reject
                </Button>
              </div>
            )}
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
      {roleUpdate && (
        <Modal show={roleUpdate} centered onHide={thirdModal}>
          <Modal.Header closeButton>
            <Modal.Title>Status of Role Update:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {roleFailed ? (<div className="form-group">
              <h3>Response From Server:</h3>
              <div className="alert alert-danger" role="alert">
                {roleFailed}
              </div>
            </div>):(<>
            <h3>Result :{roleMessage}</h3>
            </>)}
            </Modal.Body>

          <Modal.Footer>
            <Button variant="warning" onClick={() => setRoleUpdate(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
export default MyModalComponent;

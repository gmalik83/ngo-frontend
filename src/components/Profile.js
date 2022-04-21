import React, { useEffect, useState } from "react";
import AuthService from "./services/auth.service";

const Profile = () => {
  // User Data
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const User = AuthService.getCurrentUser();
    setUserData(User);
  }, []);

  return (
    <div className="container w-75 mt-4">
      {userData ? (
        <>
          {console.log(userData)}
          <h2>Following details are available :</h2>
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
            <label htmlFor="District">District</label>
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
            <div className="form-group mb-4">
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
      ) : (
        <h3>Please Login First</h3>
      )}

      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};
export default Profile;

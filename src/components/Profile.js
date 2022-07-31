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
          <h2 className="m-2">Details Submitted by you are :</h2>
          <>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="FirstName">First Name(प्रथम नाम):</label>
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
                <label htmlFor="LastName">Last Name(अंतिम नाम):</label>
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
            <div className="row">
              <div className="col mb-2">
                <label htmlFor="Current Role">Current Role:</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  name="role"
                  value={userData.authorities}
                  readOnly
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Age ">Age (आयु):</label>
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
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="father">Father's Name (पिता का नाम):</label>
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
                <label htmlFor="mother">Mother's Name (माता का नाम):</label>
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
            <h4 className="text-center">Native Address (मूल पता):</h4>
            <div className="mb-3 mt-3">
              <label htmlFor="Address" className="form-label">
                Village/Area/House No.(गांव/क्षेत्र/मकान नं):
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
                Post Office (डाक-घर):
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
              Block (खंड):
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
              Tehsil (तहसील):
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
            <div className="mb-3">
              <label htmlFor="City">District ( जिला ):</label>
              <input
                type="text"
                className="form-control"
                name="district"
                id="district"
                value={userData.district}
                aria-describedby="District"
                readOnly
              />
            </div>
            <div className="m-1">
              <label htmlFor="State">State (राज्य):</label>
              <input
                className="form-control"
                name="state"
                value={userData.state}
                readOnly
              />
            </div>
            <div className="m-1">
              <label htmlFor="Country">Country(देश):</label>
              <input
                className="form-control"
                name="country"
                id="country"
                value={userData.country}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Pincode" className="form-label">
                Pincode (पिन कोड):
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
              Educational and Professional Details (शैक्षिक और व्यावसायिक
              विवरण):
            </h4>
            <hr></hr>

            <label htmlFor="Area of Specialization and Achievement(if any)">
              Area of Specialization and Achievement (if any) (विशेषज्ञता और
              उपलब्धि का क्षेत्र (यदि कोई हो) ):
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
              <label htmlFor="Graduation:">Graduation in (स्नातक विषय):</label>
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
              <label htmlFor="12th in:">12th in (12वीं):</label>
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
                Any special education/skill/certificate (कोई विशेष
                शिक्षा/कौशल/प्रमाण पत्र:):
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
                details. i.e. department, post etc.) यदि सरकारी नौकरी/निजी
                नौकरी/पेशेवर में (विवरण लिखें। अर्थात विभाग, पद आदि): :
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
            <h4 className="text-center">
              Contact Details (सम्पर्क करने का विवरण:):
            </h4>
            <hr></hr>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number (फ़ोन नंबर)
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
              <label htmlFor="Email">Email Address (ई-मेल एड्रेस):</label>
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
                Correspondence Address (पत्राचार का पता)
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
 
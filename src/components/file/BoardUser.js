import React, { useState, useEffect } from "react";
import './BoardUser.css';
import UserService from "../services/user.service";
import EventBus from "../../common/EventBus";

const BoardUser = () => {
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
       
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container table-responsive">
      <h3 className="mt-3 mb-3">All Volunteer Details:</h3>
      {!content.length && <h1>No data available</h1>}

      {content.length ? (
        <table className="table table1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Mobile</th>
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

export default BoardUser;

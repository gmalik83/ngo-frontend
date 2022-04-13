import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import EventBus from '../../common/EventBus';

const BoardAdmin = () => {
  //
  //

  const [content, setContent] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        if (response.status === 200) {
          setContent(response.data);
          console.log(response);
        }
      },
      (error) => {
        console.log(error.response);
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(_content);

        if (error.response && error.response.status === 403) {
          EventBus.dispatch('logout');
        }
      }
    );
  }, []);
  return (
    <div className="container table-responsive">
      <h3 className="mt-3 mb-3">All Volunteer Details:</h3>
      {!content.length && <h1>No data available</h1>}
      {!message && (
        <table className="table">
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
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.country}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>{item.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
export default BoardAdmin;

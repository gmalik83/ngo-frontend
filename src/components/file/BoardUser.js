import React, { useState, useEffect } from 'react';

import UserService from '../services/user.service';
import EventBus from '../../common/EventBus';

const BoardUser = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch('logout');
        }
      }
    );
    console.log(content);
  }, []);

  return (
    <div className="container table-responsive">
      <h3 className="mt-3 mb-3">All Volunteer Details:</h3>
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
          <tr>
            <td>1</td>
            <td>Gaurav</td>
            <td>gaurav98malik@gmail.com</td>
            <td>India</td>
            <td>Haryana</td>
            <td>Sonipat</td>
            <td>8398949984</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gaurav</td>
            <td>gaurav98malik@gmail.com</td>
            <td>India</td>
            <td>Haryana</td>
            <td>Sonipat</td>
            <td>8398949984</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gaurav</td>
            <td>gaurav98malik@gmail.com</td>
            <td>India</td>
            <td>Haryana</td>
            <td>Sonipat</td>
            <td>8398949984</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gaurav</td>
            <td>gaurav98malik@gmail.com</td>
            <td>India</td>
            <td>Haryana</td>
            <td>Sonipat</td>
            <td>8398949984</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardUser;
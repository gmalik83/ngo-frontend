import React, { useState, useEffect } from 'react';
import Modal from './Modal';

import UserService from '../services/user.service';

import EventBus from '../../common/EventBus';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/boardModerator.css';
const BoardModerator = () => {
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState('');
  const [modalState, setModalOpen] = useState(false);
  const [dataId, setDataId] = useState('');
  useEffect(() => {
    UserService.getModeratorBoard().then(
      (response) => {
        if (response.status === 200) {
          setContent(response.data);
          // console.log(content);
        }
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        if (error.response && error.response.status === 403) {
          EventBus.dispatch('logout');
        }
      }
    );
  }, []);

  const handleModalToggle = (e) => {
    e.preventDefault();
    
    const id = e.target.dataset.id;
    if(modalState == false){
      setDataId(id);
    }else setDataId('');
    setModalOpen(!modalState);

    

  }

  return (
    <div className="container table-responsive">
      <h3 className="mt-3 mb-3">All Pending Requests:</h3>
      {!content.length && <h1>No data available</h1>}
      <div className='modalContainer'>
      {modalState && dataId ? <Modal handleModalToggle ={handleModalToggle} id={dataId}></Modal> : <h1></h1>}
      </div>
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
              <th scope='col'>Profile</th>
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
                  <td><Link className='btn btn-warning shadow' to='/'  onClick={handleModalToggle} data-id={item._id}>View</Link></td>
                  
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
export default BoardModerator;

import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import EventBus from "../../common/EventBus";
import { Link } from "react-router-dom";

const BoardAdmin = () => {
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");

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
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
  return (
    <div className="container">
      <h1 className="text-center m-2">This is Admin Panel </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Announcement</h5>
                <p className="card-text">
                  Add New Announcement , Delete Announcement , Update
                  Announcement from here
                </p>
                <Link className="btn btn-primary" to="/admin/announcement">
                  Go to Announcement Section
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image Slider</h5>
                <p className="card-text">
                  Add New Image in Slider , Delete Image in Slider , Update
                  Image in Slider
                </p>
                <Link className="btn btn-primary" to="/admin/image">
                  Go to Image Section
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vision And Mission</h5>
                <p className="card-text">Update Vision and Mission from Here</p>
                <Link className="btn btn-primary" to="/admin/vision">
                  Go to Vision and Mission Section Section
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">New Page Insert </h5>
                <p className="card-text">
                  Add New Page , Update Page , Delete Page
                </p>
                <Link className="btn btn-primary" to="/admin/page">
                  Go to Page Section
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardAdmin;
  
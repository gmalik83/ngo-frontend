import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "./services/user.service";

const Articles = () => {
  // Content Array for All Articles GET
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  // Message for any Error in GET API
  const [message, setMessage] = useState("");

  // When Component Loads
  useEffect(() => {
    UserService.getArticles().then(
      (response) => {
        if (response.status === 200) {
          setContent(response.data);
        }
      },
      (error) => {
        // Set resMessage to Error , if it exists
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  }, []);
  return (
    <div className="latest-box">
      <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                {content.map((item, i) => {
                  return (
                    <>
                      <img className="card-img-top" src={item.url} alt="list" />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.text}</p>
                        <Link to={item.url} className="btn btn-primary">
                          {item.link}
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};
export default Articles;
 
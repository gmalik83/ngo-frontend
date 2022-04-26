import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "./services/user.service";

const Articles = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                {content.map((item, i) => {
                  return (
                    <>
                      <img
                        className="card-img-top"
                        src={item.url}
                        alt="list"
                        
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text" >
                          {item.text}
                        </p>
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
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="list"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </div>
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="list"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </div>
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="list"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
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
    </div>
  );
};
export default Articles;

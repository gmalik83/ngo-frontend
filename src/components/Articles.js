import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div className="latest-box">
      <div className="container">
        <div className="container">
          <div className="row">
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
            </div>
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="card"
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
            </div>
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Card"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Articles;

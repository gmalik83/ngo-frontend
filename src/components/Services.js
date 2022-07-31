import React, { useEffect, useState } from "react";
import Service1 from "./images/image1.jpg";
import { Link } from "react-router-dom";
import UserService from "./services/user.service";

const Services = () => {
  // Array for Services Item 
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    // GET services data from Backend in form of array
    UserService.getServices().then(
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
    <section className="section  border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h3 className="main-heading">Our Work</h3>
            <div className="underline mx-auto"></div>
          </div>
          {/* If there is any problem in fetching data , then display default Static Data  */}
          {content.length === 0 ? (
            <>
              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={Service1}
                    className="w-100 border-bottom "
                    alt="services"
                  />
                  <div className="card-body">
                    <h6>Education</h6>
                    <div className="underline"></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a .
                    </p>
                    <Link to="/work" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={Service1}
                    className="w-100 border-bottom "
                    alt="services"
                  />
                  <div className="card-body">
                    <h6>Education</h6>
                    <div className="underline"></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a .
                    </p>
                    <Link to="/work" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={Service1}
                    className="w-100 border-bottom "
                    alt="services"
                  />
                  <div className="card-body">
                    <h6>Education</h6>
                    <div className="underline"></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a .
                    </p>
                    <Link to="/work" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
            {/* Services from Backend */}
              {content.map((item, i) => {
                return (
                  <div className="col-md-4">
                    <div className="card shadow">
                      <img
                        src={item.src}
                        className="w-100 border-bottom "
                        alt="services"
                      />
                      <div className="card-body">
                        <h6>{item.title}</h6>
                        <div className="underline"></div>
                        <p>{item.body}</p>
                        <Link to={item.link} className="btn btn-link">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Services;
 
import React, { useEffect, useState } from "react";
import UserService from "./services/user.service";

const Values = () => {
  // Array of Values from backend
  const [content, setContent] = useState([]);
  // Message if Any Error Exist
  const [message, setMessage] = useState("");

  useEffect(() => {
    // GET values from Backend
    UserService.getValues().then(
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
    <section className="section bg-c-light border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h3 className="main-heading">Vision , Mission and Values</h3>
            <div className="underline mx-auto"></div>
          </div>
          {/* If Problem in Fetching data , then Display Default Data */}
          {content.length === 0 ? (
            <>
              <div className="col-md-4 text-left">
                <h6>Our Vision</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h6>Our Mission</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h6>Our Core Values</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Display FETCHED data from Backend */}
              {content.map((item, i) => {
                return (
                  <div className="col-md-4 text-left text-justify">
                    <h6>
                      {item.title}
                      {item.check}
                    </h6>
                    <p>{item.data}</p>
                  </div>
                );
              })}
            </>
          )}
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Values;

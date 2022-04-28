import React, { useEffect, useState } from "react";
import Announcement from "./Announcement";
import UserService from "./services/user.service";

const Slider = () => {
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    UserService.getImages().then(
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
    // Slider for Image Carousel
    <div className="row">
      <div className="col-md-8">
        <div
          style={{ margin: "25px 25px" }}
          id="demo"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2000"
        >
          {/* If No Image from database , then Show a Default Image */}
          <ul className="carousel-indicators">
            {content.length === 0 ? (
              <li data-target="#demo" data-slide-to="0" className="active"></li>
            ) : (
              <>
                {content.map((item, i) => {
                  return (
                    <li data-target="#demo" data-slide-to={item.i} key={i}></li>
                  );
                })}
              </>
            )}
          </ul>

          <div className="carousel-inner">
            {content.length === 0 ? (
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmdvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Default Image"
                  height="320"
                  width="900"
                />
              </div>
            ) : (
              <>
                {content.map((item, i) => {
                  return (
                    <>
                      {i === 0 ? (
                        <div className="carousel-item active">
                          <img
                            src={item.src}
                            alt={item.alt}
                            height="320"
                            width="900"
                          />
                        </div>
                      ) : (
                        <div className="carousel-item">
                          <img
                            src={item.src}
                            alt={item.alt}
                            height="320"
                            width="900"
                          />
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            )}
          </div>
          {/* Controls for Slider} */}
          <a
            class="carousel-control-prev"
            href="#demo"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#demo"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      {message && console.log(message)}
      <div className="col-md-4">
        <div className="m-4">
          <Announcement /> 
        </div>
      </div>
    </div>
  );
};
export default Slider;

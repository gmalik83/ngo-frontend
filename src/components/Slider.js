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
    <div className="row">
      <div className="col-md-8">
        <div
          id="demo"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2000"
        >
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
            {/* <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li> */}
          </ul>

          <div className="carousel-inner">
            {content.length === 0 ? (
              <>
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmdvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Default Image"
                    height="320"
                    width="1100"
                  />
                </div>
              </>
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
                            width="1100"
                          />
                        </div>
                      ) : (
                        <div className="carousel-item">
                          <img
                            src={item.src}
                            alt={item.alt}
                            height="320"
                            width="1100"
                          />
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            )}
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      {message && console.log(message)}
      <Announcement />
    </div>
  );
};
export default Slider;

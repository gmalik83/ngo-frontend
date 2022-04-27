import React, { useState, useEffect } from "react";
import UserService from "./services/user.service";
import "./Announcement.css";

const Announcement = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    UserService.getAnnouncement().then(
      (response) => {
        setLoading(true);
        if (response.status === 200) {
          setContent(response.data);
          setLoading(false);
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
        setLoading(false);
      }
    );
  }, []);
  return (
    <div>
      <div className="panel panel-primary" style ={{margin:"25x 10px 25px 5px"}}>
        <div className="panel-heading panel-heading-1 panel2">Announcement</div>

        <div className="panel-body panel1">
          <marquee
            className="marquee"
            direction="up"
            scrolldelay="250"
            height="300"
          >
            {content.length === 0 ? (
              <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            ) : (
              <>
                {content.map((item, i) => {
                  return (
                    <p className="panel1">
                      <a href={item.url} key={i} target="_blank">
                        {item.heading}
                      </a>
                    </p>
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
          </marquee>
        </div>
      </div>
    </div>
  );
};
export default Announcement;

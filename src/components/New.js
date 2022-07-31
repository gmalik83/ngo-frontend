import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "./services/user.service";
import { Spinner } from "react-bootstrap";

const New = () => {
  // Dynamic ID for Dynamic Routing
  // Fetch data from Backend using find({id:ID})
  let { Id } = useParams();
  // Content Array of Result
  const [content, setContent] = useState([]);
  // For Loading State
  const [loading, setLoading] = useState(false);
  // For Any Error Message
  const [message, setMessage] = useState("");

  // When Component Loads , then GET Page/:Id content from backend
  useEffect(() => {
    UserService.getPage(Id).then(
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
    <div className="container">
      <h1 className="text-center">You are on Page{Id}</h1>
      <hr />
      {content ? (
        <>
          {" "}
          <h1>{content.heading}</h1>
          <p>{content.body}</p>
        </>
      ) : (
        <h2>Unable to Load COntent</h2>
      )}
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden col-md-5 offset-md-4">
            Loading...
          </span>
        </Spinner>
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
export default New;
 
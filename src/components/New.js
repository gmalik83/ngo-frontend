import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "./services/user.service";

const New = () => {
  let { Id } = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
